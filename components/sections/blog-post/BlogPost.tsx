import React from 'react'
import Container from 'components/container'
import Image from 'next/image'

const BlogPost = ({ post }) => {
  return (
    <Container>
      <article className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 mb-12 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
          </h1>
          {post.coverImage ? (
            <Image src={post.coverImage} layout="responsive" width={840} height={353} />
          ) : null}
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: post.bodyHtml || '' }}></div>
        </div>
      </article>
    </Container>
  )
}

export default BlogPost
