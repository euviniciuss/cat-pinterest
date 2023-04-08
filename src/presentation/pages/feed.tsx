import { Page } from '@/presentation/shared/components/layout'

import { FeedSection } from '@/presentation/modules/feed/components/FeedSection/FeedSection'

export default function Feed() {
  return(
    <Page>
      <Page.Wrapper>
        <FeedSection />
      </Page.Wrapper>
    </Page>
  )
}