import React from 'react'
import { GetStaticProps } from 'next'

import Hero from 'components/sections/hero'
import BlogSnippet from 'components/sections/blog-snippet'

import { home } from 'content'

import { getAllPosts } from 'core/get-posts'

const Home = ({ posts }) => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <Hero />
        <BlogSnippet articles={posts} />
      </div>
    </div>
  )
}

// export function getStaticProps(ctx) {
//   return {
//     props: {
//       content: ctx.preview ? home.draft : home.published,
//     },
//   }
// }

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return { props: { posts }, revalidate: 1 }
}
