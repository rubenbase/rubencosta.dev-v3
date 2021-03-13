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
      <Hero />
      <div className="h-screen mb-96"></div>
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

export default Blog

/**
 * Need to get the posts from the
 * fs and our CMS
 */
