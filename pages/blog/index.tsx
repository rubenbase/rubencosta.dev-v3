import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import matter from 'gray-matter'
import path from 'path'
import dayjs from 'dayjs'
import fs from 'fs'
import orderby from 'lodash.orderby'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import PostPreview from '../../components/postPreview'
import { posts as postsFromCMS } from '../../content'

import MainNav from 'components/templates/MainNav'
import NavbarPromo from 'components/molecules/navbar-promo'

import { getAllPosts } from 'core/get-posts'

const Blog = ({ posts }) => {
  return (
    <div className="relative box-border bg-gray-50">
      <NavbarPromo />
      <MainNav />
      <main className="wrapper">
        <div className="mt-10">
          <span className="font-light text-blue-700">Hey there!</span>
        </div>
        <div className="mb-8 rounded-full">
          <span className="font-bold text-4xl">Explore the beauty of the web</span>
        </div>
        <div className="mb-20">{/* TODO: Complete this  */}</div>
        <div>
          <div className="flex flex-wrap pb-96">
            {posts.map((post) => (
              <div
                style={{ width: '264px' }}
                className="mr-10 mb-10 flex flex-col h-80  p-3 rounded-2xl bg-white  shadow-post"
              >
                <div className=" w-60 rounded-2xl overflow-hidden flex justify-center cursor-pointer">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      style={{ height: '156px', minHeight: '156px' }}
                      className="w-full object-cover z-10"
                      src="https://picsum.photos/200/300"
                    />
                  </Link>
                </div>
                <div className="p-3 flex-1">
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <h2 className="font-semibold text-lg mb-2 leading-tight fade">
                        {post.title}
                      </h2>
                    </a>
                  </Link>
                  <p className="text-sm fade text-gray-500">{post.description}</p>
                </div>
                <div className="px-3">
                  <span className="text-xs">
                    {dayjs(post.date).format('D MMMM, YYYY')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

Blog.defaultProps = {
  posts: [],
}

// export function getStaticProps(ctx) {
//   const cmsPosts = (ctx.preview ? postsFromCMS.draft : postsFromCMS.published).map(
//     (post) => {
//       const { data } = matter(post)
//       return data
//     }
//   )

//   const postsPath = path.join(process.cwd(), 'posts')
//   const fileNames = fs.readdirSync(postsPath)

//   const filePosts = fileNames.map((name) => {
//     const fullPath = path.join(process.cwd(), 'posts', name)
//     const file = fs.readFileSync(fullPath, 'utf-8')
//     const { data } = matter(file)
//     return data
//   })

//   const posts = [...cmsPosts, ...filePosts]

//   return {
//     props: { posts },
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return { props: { posts }, revalidate: 1 }
}

export default Blog
