import * as React from 'react'
import Link from 'next/link'

import { Post, PostSummary } from 'core/types/posts'

type Props = Post['relatedPosts']

export function RelatedPosts({ prev, next }: Props) {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-0 border-t border-b py-5">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
          {next && <RelatedBlogPostLink label="Next article" post={next} />}
        </div>
        <div className="sm:col-span-1 sm:text-right">
          {prev && <RelatedBlogPostLink label="Previous article" post={prev} />}
        </div>
      </div>
    </section>
  )
}

export default RelatedPosts

function RelatedBlogPostLink({ label, post }: { label: string; post: PostSummary }) {
  return (
    <>
      <div className="text-sm font-medium text-blue-500 tracking-wider">{label}</div>
      <div className="mt-1 text-sm">
        <Link href={`/blog/${post.slug}`}>
          <a className="font-bold text-base hover:text-gray-600">{post.title}</a>
        </Link>
      </div>
    </>
  )
}
