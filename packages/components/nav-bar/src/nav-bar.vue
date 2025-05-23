<template>
  <header class="nav-bar" >
    <div :class="navClasses">
      <div :class="ns.e('container')">
        <div :class="ns.e('left')">
          <div v-if="slots.icon" :class="ns.e('icon')">
            <slot name="title"></slot>
          </div>
          <img v-else :src="props.icon" alt="" :class="ns.e('icon')"/>
          <span v-if="props.title" :class="ns.e('title')">{{ props.title }}</span>
          <div v-if="slots.left">
            <slot name="left"></slot>
          </div>
        </div>
        <div :class="ns.e('right')">
          <div v-if="slots.right" :class="ns.e('right-slot')">
            <slot name="right"></slot>
          </div>
          <div :class="linksClasses">
            <a :href="item.link" v-for="item in props.socialLinks" :key="item.icon" target="_blank" @click.prevent="onHref($event, item)">
              <ja-icon :size="20" :class="ns.e('social-link')">
                <component :is="item.icon" />
              </ja-icon>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </header>
  
</template>

<script lang='ts' setup>
import { useSlots, computed, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useNamespace } from '@janus-ui/hooks'
import { throttleByRaf } from '@janus-ui/utils'
import { JaIcon } from '@janus-ui/components'
import { navProps, NavLinkType } from './nav-bar'

defineOptions({
  name: 'JaNavBar'
})

const ns = useNamespace('nav-bar')
const dvNs = useNamespace('divider')
const props = defineProps(navProps)
const slots = useSlots();
const hideStatus = ref(false)

const navClasses = computed(() => {
  return [
    ns.b(),
    ns.is('hide', hideStatus.value)
  ]
})

const linksClasses = computed(() => {
  return [
    ns.e('social-links'),
    slots.right ? dvNs.e('before') : ''
  ]
})

const onHref = (e: Event, item: NavLinkType) => {
  if (!item.link && item.event) {
    item.event()
  } else {
    window.open(item.link)
  }
}

useEventListener(window, 'scroll', throttleByRaf(() => {
  if (!props.scrollHide) return
  hideStatus.value = window.scrollY > 0
}))
</script>

<style scoped lang='scss'>
  
</style>