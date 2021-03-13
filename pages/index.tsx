import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import MainNav from 'components/templates/MainNav'
import NavbarPromo from 'components/molecules/navbar-promo'
import Hero from 'components/sections/hero'
import BlogSnippet from 'components/sections/blog-snippet'

const Home = () => {
  return (
    <div className="relative">
      <NavbarPromo />
      <MainNav />
      <div className="overflow-hidden relative">
        <Hero />
        <BlogSnippet />
      </div>

      <main>
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

export default Home

/**
 * Need to get the posts from the
 * fs and our CMS
 */
