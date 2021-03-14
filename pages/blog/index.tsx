import React from 'react'
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
    <div className="relative box-border bg-red-">
      <NavbarPromo />
      <MainNav />
      <main>
        <Container>
          {posts.map((post) => (
            <Pane key={post.title} marginY={majorScale(5)}>
              <PostPreview post={post} />
            </Pane>
          ))}
        </Container>
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
