import { withInstall, withNoopInstall } from '@janus-ui/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'
export const JaAnchor = withInstall(Anchor, {
  AnchorLink
})

export default JaAnchor

export const JaAnchorLink = withNoopInstall(AnchorLink)
