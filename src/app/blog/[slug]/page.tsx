import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

import ArticleLayout from "@/components/blog/ArticleLayout"
import { mdxComponents } from "@/components/mdx/mdx-components"
import { getAllPosts, getPostBySlug } from "@/lib/blog"

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const url = `https://visaxa.app/blog/${slug}`

  return {
    title: post.title,
    description: post.description,
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <ArticleLayout
      title={post.title}
      subtitle={post.subtitle}
      description={post.description}
      date={post.date}
      readingTimeText={post.readingTimeText}
      tags={post.tags}
    >
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </ArticleLayout>
  )
}