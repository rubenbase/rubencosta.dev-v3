import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Post } from 'core/types/posts'
import Container from '../../components/container'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { posts } from '../../content'
import renderToString from 'next-mdx-remote/render-to-string'
import MainNav from 'components/templates/MainNav'
import Footer from 'components/templates/footer'
import { getAllPosts, getPostBySlug } from 'core/get-posts'

export type BlogPostProps = { post?: Partial<Post> }

export const BlogPost = ({ post }: BlogPostProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }

  if (!post) {
    return null
  }

  return (
    <Pane>
      <Head>
        <title>Ruben Costa Blog</title>
      </Head>
      <main>
        <Container>
          <div className="flex flex-wrap py-10 mb-2 px-4 space-x-4">
            <h1>{post.title}</h1>
          </div>
        </Container>
      </main>
    </Pane>
  )
}

BlogPost.defaultProps = {
  source: '',
  frontMatter: { title: 'default title', summary: 'summary', publishedOn: '' },
}

// export function getStaticPaths() {
//   const postsPath = path.join(process.cwd(), 'posts')
//   const fileNames = fs.readdirSync(postsPath)
//   const slugs = fileNames.map((name) => {
//     const filePath = path.join(postsPath, name)
//     const file = fs.readFileSync(filePath, 'utf-8')
//     const { data } = matter(file)
//     return data
//   })

//   return {
//     paths: slugs.map((s) => ({ params: { slug: s.slug } })),
//     fallback: true,
//   }
// }

// /**
//  * Need to get the paths here
//  * then the the correct post for the matching path
//  * Posts can come from the fs or our CMS
//  */
// export async function getStaticProps({ params, preview }) {
//   let post
//   try {
//     const filePath = path.join(process.cwd(), 'posts', params.slug + '.mdx')

//     post = fs.readFileSync(filePath, 'utf-8')
//   } catch {
//     const cmsPosts = (preview ? posts.draft : posts.published).map((p) => {
//       return matter(p)
//     })
//     const match = cmsPosts.find((p) => p.data.slug === params.slug)
//     post = match.content
//   }
//   const { data } = matter(post)
//   const mdxSource = await renderToString(post, { scope: data })
//   return {
//     props: {
//       source: mdxSource,
//       frontMatter: data,
//     },
//   }
// }
export default BlogPost

export const getStaticProps: GetStaticProps<BlogPostProps> = async (context) => {
  const slug = context.params?.slug
  try {
    const post = await getPostBySlug(`${slug}`)
    return { props: { post }, revalidate: 1 }
  } catch (e) {
    console.error(`Failed to generate post for slug: ${slug}`)
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))
  return { paths, fallback: true }
}
