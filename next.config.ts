import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Turbopack requires serializable loader options (no function refs).
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
  },
})

export default withMDX(nextConfig)
