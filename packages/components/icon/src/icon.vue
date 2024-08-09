<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, definePropType, isUndefined } from '@janus-ui/utils'
import { useNamespace } from '@janus-ui/hooks'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'JaIcon',
  inheritAttrs: false,
})
const props = defineProps({
  size: {
    type: definePropType<number | string>([Number, String]),
  },
  color: {
    type: String,
  }
})
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    color: color,
  }
})
</script>
