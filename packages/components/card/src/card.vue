<template>
  <div :class="ns.b()">
    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="[ns.e('body'), bodyClass]" :style="bodyStyle">
      <slot />
    </div>
    <div v-if="$slots.footer || footer" :class="ns.e('footer')">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { definePropType } from '@janus-ui/utils'
import type { StyleValue } from 'vue'
import { useNamespace } from '@janus-ui/hooks'

defineOptions({
  name: 'JaCard'
})

const props = defineProps({
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  footer: {
    type: String,
    default: ''
  }
})

const ns = useNamespace('card')
</script>
