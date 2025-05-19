<template>
  <div :class="nodeClasses" @click.stop="nodeClick(node)">
    <div :class="ns.be('node','content')">
      <ja-icon :class="getNodeIconClasses(node)" size="14" color="#707070">
        <component :is="tree.props?.icon || Arrow" />
      </ja-icon>
      <ja-icon v-show="nodeLoading" class="is-loading" size="14" color="#707070">
        <Loading />
      </ja-icon>
      <ja-tree-node-content :node="node"></ja-tree-node-content>
    </div>
    <ja-collapse-transition>
      <div v-show="shouldExpand && node[getNodeAttrName('children')]?.length" :class="ns.be('node','children')">
        <ja-tree-node
          v-for="child in node[getNodeAttrName('children')]"
          :key="child[tree.props.nodeKey]"
          :node="child"
        >
      </ja-tree-node>
      </div>
    </ja-collapse-transition>
  </div>
</template>

<script lang='ts' setup> 
import { ref, computed, defineOptions, reactive, inject } from 'vue'
import { RootTreeType } from './tree'
import { Arrow, Loading } from '@janus-c/icons-vue'
import { useNamespace } from '@janus-ui/hooks'
import { JaIcon, JaCollapseTransition } from '@janus-ui/components'
import JaTreeNodeContent from './tree-node-content.vue'

defineOptions({
  name: 'JaTreeNode'
})
const tree = inject<RootTreeType>('rootTree')!
const emits = defineEmits(['nodeClick'])
const state = reactive({
  expandKeys: {},
  treeDataMap: new Map<string, any>(),
})
const ns = useNamespace('tree')
const treeNodePorps = defineProps({
  node: {
    type: Object,
    required: true,
  },
})

const nodeLoading = ref(false)

const nodeClasses = computed(() => [
  ns.b('node'),
  ns.is('expanded', shouldExpand.value),
  ns.is('disabled', treeNodePorps.node.disabled)
])

const getNodeIconClasses = (node: any) => {
  return [
    ns.be('node','icon'),
    shouldExpand.value ? 'expanded' : '',
    ns.is('leaf', !node[getNodeAttrName('children')]?.length)
  ]
}

// 展开状态判断
const shouldExpand = computed(() => {
  return tree.props.expandedKeys?.length > 0
    ? tree.props.expandedKeys.includes(getNodeKey(treeNodePorps.node))
    : state.expandKeys[getNodeKey(treeNodePorps.node)]
})

const nodeClick = async (node: any) => {
  if (node[getNodeAttrName('disabled')]) {
    return
  }
  if (!shouldExpand.value && node[getNodeAttrName('children')]?.length) {
    if (tree.props?.lazy && tree.props?.load) {
      try {
        // 缓存处理
        const cacheData = state.treeDataMap.get(getNodeKey(node))
        if (!cacheData?.length) {
          nodeLoading.value = true
          const data = await tree.props?.load(node)
          state.treeDataMap.set(getNodeKey(node), data)
          treeNodePorps.node[getNodeAttrName('children')]  = data
          nodeLoading.value = false
        }
        state.expandKeys[getNodeKey(node)] = true
      } catch (error) {
        console.error('nodeClick error', error)
        nodeLoading.value = false
      }
    } 
    state.expandKeys[getNodeKey(node)] = true
  } else {
    state.expandKeys[getNodeKey(node)] = false
  }
  emits('nodeClick', node)
}

const getNodeKey = (node: any) => {
  return node[tree.props.nodeKey]
}

const getNodeAttrName = (key) => {
  const attrMap = {
    label: tree.props.nodeProps?.label || 'label',
    children: tree.props.nodeProps?.children || 'children',
    disabled: tree.props.nodeProps?.disabled || 'disabled',
  }
  return attrMap[key]
}
</script>

<style scoped lang='scss'>
  
</style>