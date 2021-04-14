import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'

import Container from 'components/container'
import RelatedPosts from 'components/molecules/related-posts/RelatedPosts'
import { Post } from 'core/types/posts'

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <Container>
      <article className="relative px-4 sm:px-6 lg:px-8 sm:pt-16 sm:pb-5">
        <div className="text-lg max-w-prose mx-auto">
          <h1 className="mt-10">
            <span className="mt-2 mb-12 block text-5xl leading-tight font-extralight tracking-tight text-gray-900 sm:text-7xl">
              {post.title}
            </span>
          </h1>

          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mb-10">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Published</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {dayjs(post.date).format('D MMMM, YYYY')}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Categories</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {post.tagList.map((tag) => (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-0.5">
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          {post.coverImage ? (
            <Image src={post.coverImage} layout="responsive" width={840} height={353} />
          ) : null}
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: post.bodyHtml || '' }}></div>
        </div>
      </article>

      <RelatedPosts {...post.relatedPosts} />
    </Container>
  )
}

export default BlogPost
