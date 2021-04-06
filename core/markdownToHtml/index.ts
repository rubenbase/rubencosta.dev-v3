import unified from 'unified'
import markdown from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import rehypePrism from '@mapbox/rehype-prism'
import html from 'rehype-stringify'

const processor = unified()
  .use(markdown)
  .use(gfm)
  .use(remark2rehype)
  .use(rehypePrism)
  .use(html)

const fallbackProcessor = unified().use(markdown).use(gfm).use(remark2rehype).use(html)

export async function markdownToHtml(md: string) {
  try {
    return (await processor.process(md)).contents as string
  } catch (e) {
    return (await fallbackProcessor.process(md)).contents as string
  }
}
