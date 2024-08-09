import { definePropType } from "@janus-ui/utils"

export const anchorProps = {
  container: {
    type: definePropType<string | HTMLElement | Window | null>([
      String,
      Object,
    ])
  },
  direction: {
    type: definePropType<'vertical' | 'horizontal'>(String),
    default: 'vertical'
  },
  duration: {
    type: Number,
    default: 300
  }
}