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

  const url = `https://www.visaxa.app/blog/${slug}`

  const overrides: Record<
    string,
    { title: string; description?: string; openGraphTitle?: string }
  > = {
    "how-to-evaluate-a-crm-framework": {
      title: "How to Evaluate a CRM System | Visaxa Research",
      description:
        "A practical way to evaluate CRM systems beyond features and marketing claims.",
    },
    "why-appointment-scheduling-systems-fail-service-businesses": {
      title: "Why Scheduling Systems Fail in Service Businesses | Visaxa",
      description:
        "Why scheduling systems fail in real service businesses and what breaks as they grow.",
    },
  }

  const o = overrides[slug]
  const title = o?.title ?? post.title
  const description = o?.description ?? post.description

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: o?.openGraphTitle ?? title,
      description,
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