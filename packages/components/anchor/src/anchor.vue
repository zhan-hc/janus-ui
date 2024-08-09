<template>
  <div :class="anchorClasses" ref="anchorRef">
    <div
    ref="markerRef"
      :class="ns.e('marker')"
      :style="markerStyle"
    >
    </div>
    <div :class="ns.e('list')">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, provide, onMounted, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useNamespace } from '@janus-ui/hooks'
import { 
  getElement,
  getScrollTop,
  definePropType,
  isWindow,
  getScrollElement,
  animateScrollTo,
  getOffsetTopDistance,
  throttleByRaf,
  addUnit
 } from '@janus-ui/utils'
import { anchorProps } from './anchor'
import { anchorKey, AnchorLinkState } from './constants'

defineOptions({
  name: 'JaAnchor'
})

const props = defineProps(anchorProps)

const emit = defineEmits(['click', 'change'])

const ns = useNamespace('anchor')

const currentAnchor = ref(null)
const anchorRef = ref<HTMLElement | null>(null)
const markerRef = ref<HTMLElement | null>(null)
const containerEl = ref<HTMLElement | Window>()
const links: Record<string, HTMLElement> = {}

let isScrolling = false
let currentScrollTop = 0

const anchorClasses = computed(() => {
  return [
    ns.b(),
    ns.m(props.direction),
  ]
})

const markerStyle = computed(() => {
  if (!markerRef.value || !currentAnchor.value) return {}
  const linksRef = links[currentAnchor.value]
  const anchorRect = anchorRef.value.getBoundingClientRect()
  // const markerRect = markerRef.value.getBoundingClientRect()
  const linkRect = linksRef.getBoundingClientRect()
  if (props.direction === 'horizontal') {
    const left = linkRect.left - anchorRect.left
    return  {
      left: addUnit(left),
      opacity: 1,
      width: addUnit(linkRect.width)
    }
  } else {
    const top = linksRef.offsetTop + ((linksRef.offsetHeight - markerRef.value.offsetHeight) / 2)
    return {
      top: `${top}px`,
      opacity: 1
    }
  }
  
})

const addLinks = (state: AnchorLinkState) => {
  links[state.href] = state.el
}

const setCurrentAnchor = (href?: string) => {
  const activeHref = currentAnchor.value
  if (activeHref !== href) {
    currentAnchor.value = href
    emit('change', href)
  }
}

const getCurrentHref = () => {
  if (!containerEl.value) return
  const scrollTop = getScrollTop(containerEl.value)
  const anchorTopList: { top: number; href: string }[] = []
  for(const href of Object.keys(links)) {
    const target = getElement(href)
    if (!target) continue
    const scrollEle = getScrollElement(target, containerEl.value)
    const distance = getOffsetTopDistance(target, scrollEle)
    anchorTopList.push({
      top: distance,
      href
    })
  }
  anchorTopList.sort((prev, next) => prev.top - next.top)
  for (let i = 0; i < anchorTopList.length; i++) {
    const item = anchorTopList[i]
    const next = anchorTopList[i + 1]
    if (item.top <= scrollTop && (!next || next.top > scrollTop)) {
      return item.href
    }
  }
}

let clearAnimate: (() => void) | null = null
const scrollToAnchor = (href: string) => {
  if (!containerEl.value) return
  const target = getElement(href)
  if (!target) return
  if (clearAnimate) clearAnimate()
  isScrolling = true
  const scrollEle = getScrollElement(target, containerEl.value)
  const distance = getOffsetTopDistance(target, scrollEle)
  const max = scrollEle.scrollHeight - scrollEle.clientHeight
  const to = Math.min(distance , max)
  clearAnimate = animateScrollTo(
    containerEl.value,
    currentScrollTop,
    to,
    props.duration,
    () => {
      setTimeout(() => {
        isScrolling = false
      }, 20)
    }
  )
}
const scrollTo = (href?: string) => {
  if (href) {
    setCurrentAnchor(href)
    scrollToAnchor(href)
  }
}

const handleClick = (e: MouseEvent, href?: string) => {
  emit('click', e, href)
  scrollTo(href)
}

const handleScroll = throttleByRaf(() => {
  if (containerEl.value) {
    currentScrollTop = getScrollTop(containerEl.value)
  }
  const currentHref = getCurrentHref()
  if (isScrolling || !currentHref) return
  setCurrentAnchor(currentHref)
})

const getContainer = () => {
  const el = getElement(props.container)
  if (!el || isWindow(el)) {
    containerEl.value = window
  } else {
    containerEl.value = el
  }
}

useEventListener(containerEl, 'scroll', handleScroll)

onMounted(() => {
  getContainer()
  const hash = decodeURIComponent(window.location.hash)
  const target = getElement(hash)
  if (target) {
    setCurrentAnchor(hash)
  } else {
    handleScroll()
  }
}),

watch(
  () => props.container,
  () => {
    getContainer()
  }
)


provide(anchorKey, {
  ns,
  currentAnchor,
  addLinks,
  handleClick
})

defineExpose({
  scrollTo
})

</script>