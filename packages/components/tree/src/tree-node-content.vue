<script lang='ts'>
import { defineComponent, renderSlot, inject, h } from 'vue'
import { RootTreeType } from './tree'
import { useNamespace } from '@janus-ui/hooks'
export default defineComponent({
  name: 'JaTreeNodeContent',
  props: {
    node: {
      type: Object,
      required: true,
    }
  },
  setup (props) {
    const ns = useNamespace('tree')
    const tree = inject<RootTreeType>('rootTree')!
    return () => {
      const node = props.node
      const nodeLabel = tree.props.nodeProps?.label || 'label'
      return renderSlot(tree.slots, 'default', { node }, () => [
          h(
            'span',
            { class: ns.be('node', 'label') },
            node[nodeLabel]
          ),
        ])

    }
  }
});

</script>

<style scoped lang='scss'>
  
</style>