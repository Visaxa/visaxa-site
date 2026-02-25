import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

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
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
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
      <MDXRemote source={post.content} components={mdxComponents} />
    </ArticleLayout>
  )
}