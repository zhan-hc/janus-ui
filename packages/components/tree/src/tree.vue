<template>
  <div :class="ns.b()">
    <ja-tree-node v-for="node in props.data" :key="node[nodeKey]" :node="node">
    </ja-tree-node>
  </div>
</template>

<script lang='ts' setup> 
import { computed, defineOptions, reactive, provide, useSlots } from 'vue'
import { Arrow } from '@janus-c/icons-vue'
import { useNamespace } from '@janus-ui/hooks'
import { treeProps } from './tree'
import JaTreeNode from './tree-node.vue'

defineOptions({
  name: 'JaTree'
})

const slots = useSlots()
const props = defineProps(treeProps)
const emits = defineEmits(['nodeClick'])
const ns = useNamespace('tree')
provide('rootTree', { props, slots });
</script>

<style scoped lang='scss'>
  
</style>