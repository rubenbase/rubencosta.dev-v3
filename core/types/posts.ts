export type PostSummary = {
  slug: string
  title: string
  date: string
  description: string
  coverImage: string
}

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  bodyHtml: string
  openGraphImage?: string
  coverImage?: string
  tagList?: Array<string>
  pageViews?: number
  coverImageDimensions?: {
    width: number
    height: number
  }
  relatedPosts: {
    prev?: PostSummary
    next?: PostSummary
  }
  mirrors: Array<{ site: string; postUrl: string }>
}
