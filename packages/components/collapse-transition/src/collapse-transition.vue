<template>
  <transition v-on="on">
    <slot></slot>
  </transition>
</template>

<script lang='ts' setup>
import { useNamespace } from '@janus-ui/hooks'
import type { RendererElement } from 'vue'

defineOptions({
  name: 'JaCollapseTransition'
})
const on = {
  beforeEnter(el: RendererElement) {
    if (el) {
      if (!el.dataset) {
        el.dataset = {}
      }
      el.style.height = 0
      el.style.transition = 'height 0.3s ease-in-out'
    }
  },

  enter(el: RendererElement) {
    requestAnimationFrame(() => {
      el.dataset.oldOverflow = el.style.overflow
      el.style.height = `${el.scrollHeight}px`
      el.style.overflow = 'hidden'
    })
  },
  afterEnter(el: RendererElement) {
    el.style.overflow = el.dataset.oldOverflow
    el.style.height = ''
  },

  beforeLeave(el: RendererElement) {
    el.style.overflow = 'hidden'
    el.style.height = `${el.scrollHeight}px`
  },
  leave(el: RendererElement) {
    el.style.height = '0'
    el.style.overflow = 'hidden'
  },
  afterLeave(el: RendererElement) {
    el.style.height = ''
  },
}
</script>

<style scoped lang='scss'>
  
</style>