import React from 'react'
import Link from 'next/link'
import { Pane, majorScale } from 'evergreen-ui'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import orderby from 'lodash.orderby'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import PostPreview from '../../components/postPreview'
import { posts as postsFromCMS } from '../../content'
import MainNav from 'components/templates/MainNav'
import NavbarPromo from 'components/molecules/navbar-promo'
import Hero from 'components/sections/hero'

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
        <div className="mb-20">
          {/* <div className="inline-flex flex-col justify-center relative text-gray-800">
            <div className="relative">
              <input
                type="text"
                className="p-2 pl-8 rounded border border-gray-300 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:text-gray-800"
                placeholder="Filter by anything"
              />
              <svg
                className="w-4 h-4 absolute left-2.5 top-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* <ul class="bg-white border border-gray-100 w-full mt-2">
              <li class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                <svg
                  class="absolute w-4 h-4 left-2 top-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <b>Gar</b>dameer - Italië
              </li>
              <li class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                <svg
                  class="absolute w-4 h-4 left-2 top-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <b>Gar</b>da - Veneto - Italië
              </li>
              <li class="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                <svg
                  class="absolute w-4 h-4 left-2 top-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <b>Gar</b>da Hotel - Italië
              </li>
              <li class="pl-8 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                <svg
                  class="absolute w-4 h-4 left-2 top-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <b>Gar</b>dena Resort - Italië
              </li>
            </ul>
          
          </div>
        */}
        </div>
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Popular articles</h1>
          </div>
          <div className="flex flex-wrap pb-96">
            {/* <Pane key={post.title} marginY={majorScale(5)}>
              <PostPreview post={post} />
            </Pane> */}
            {posts.map((post) => (
              <div
                style={{ width: '264px' }}
                className="mr-10 mb-10 flex flex-col h-80  p-3 rounded-2xl bg-white  shadow-post"
              >
                <div className=" w-60 rounded-2xl overflow-hidden flex justify-center">
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
                    <h2 className="font-semibold text-lg mb-2 leading-tight fade">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm fade text-gray-500">{post.summary}</p>
                </div>
                <div className="px-3">
                  <span className="text-xs">1 min read</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Container>
          {posts.map((post) => (
            <Pane key={post.title} marginY={majorScale(5)}>
              <PostPreview post={post} />
            </Pane>
          ))}
        </Container> */}
      </main>
    </div>
  )
}

Blog.defaultProps = {
  posts: [],
}

export function getStaticProps(ctx) {
  const cmsPosts = (ctx.preview ? postsFromCMS.draft : postsFromCMS.published).map(
    (post) => {
      const { data } = matter(post)
      return data
    }
  )

  const postsPath = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsPath)

  const filePosts = fileNames.map((name) => {
    const fullPath = path.join(process.cwd(), 'posts', name)
    const file = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(file)
    return data
  })

  const posts = [...cmsPosts, ...filePosts]

  return {
    props: { posts },
  }
}

export default Blog

/**
 * Need to get the posts from the
 * fs and our CMS
 */
