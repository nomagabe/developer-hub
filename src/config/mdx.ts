import rehypeSlug from 'rehype-slug'

import { Alert } from '@/components/Alert'
import { Code, CustomH2, CustomH3 } from '@/components/Docs/atoms'
import { FAQ } from '@/components/FAQ'
import { HowToUse } from '@/components/HowToUse'
import { PostmanLinks } from '@/components/Links/PostmanLinks'
import { UseCasesComparisonTable } from '@/components/UseCasesComparisonTable'
import { Effort } from '@/components/UseCasesComparisonTable/atoms'
import { WebhooksList, WebhooksTable } from '@/components/Webhooks'

export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
    ],
  },
}
export const mdxComponents = {
  h2: CustomH2,
  h3: CustomH3,
  code: Code,
  UseCasesComparisonTable,
  Effort,
  HowToUse,
  Alert,
  FAQ,
  WebhooksList,
  WebhooksTable,
  PostmanLinks,
}
