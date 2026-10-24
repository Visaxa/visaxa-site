import http from "node:http"

const port = Number(process.env.SITE_INTELLIGENCE_MOCK_PORT ?? 6380)
const hashes = new Map()

const server = http.createServer(async (request, response) => {
  if (request.method === "GET" && request.url === "/snapshot") {
    const snapshot = Object.fromEntries([...hashes].map(([key, hash]) => [key, Object.fromEntries(hash)]))
    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(JSON.stringify(snapshot, null, 2))
    return
  }

  if (request.method !== "POST" || request.url !== "/pipeline") {
    response.writeHead(404).end()
    return
  }

  let body = ""
  for await (const chunk of request) body += chunk
  const commands = JSON.parse(body)
  const result = commands.map(([name, key, field, amount]) => {
    if (name === "HINCRBY") {
      const hash = hashes.get(key) ?? new Map()
      hash.set(field, (hash.get(field) ?? 0) + Number(amount))
      hashes.set(key, hash)
      return { result: hash.get(field) }
    }
    if (name === "HGETALL") return { result: [...(hashes.get(key) ?? new Map())].flat() }
    if (name === "EXPIRE") return { result: 1 }
    return { error: "unsupported test command" }
  })
  response.writeHead(200, { "Content-Type": "application/json" })
  response.end(JSON.stringify(result))
})

server.listen(port, "127.0.0.1", () => console.log(`Site Intelligence Redis mock listening on ${port}`))
