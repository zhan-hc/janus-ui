import { definePropType, iconPropType } from "@janus-ui/utils"

export const treeProps = {
  data: {
    type: definePropType<Array<{[key: string]: any}>>(Array),
    default: () => []
  },
  nodeProps: {
    type: definePropType<TreeProps>(Object)
  },
  nodeKey: {
    type: definePropType<string | number>([String, Number]),
    default: 'id'
  },
  expandedKeys: {
    type: definePropType<Array<string | number>>(Array),
    default: () => []
  },
  icon: {
    type: iconPropType
  },
  lazy: {
    type: Boolean,
    default: false
  },
  load: {
    type: Function,
    default: () => {}
  },
}


export interface TreeProps {
  label: string
  children: string
  disabled: string
}

export interface RootTreeType {
  props: any,
  slots: any
}