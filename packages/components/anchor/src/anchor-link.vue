<template>
  <div :class="ns.e('item')">
    <a ref="linkRef" :class="linkClaasses" :href="href" @click="handleClick">
      <slot>{{ title }}</slot>
    </a>
  </div>
  
</template>

<script lang='ts' setup>
import { ref, inject, computed, onMounted } from 'vue'
import { useNamespace } from '@janus-ui/hooks'
import { anchorKey } from './constants'

defineOptions({
  name: 'JaAnchorLink'
})
const props = defineProps({
  href: {
    type: String
  },
  title: {
    type: String
  },
});

const emit = defineEmits(['click']);

const linkRef = ref<HTMLElement | null>(null)

const { 
  ns,
  currentAnchor,
  addLinks,
  handleClick: contextHandleClick
} = inject(anchorKey)!

const linkClaasses = computed(() => {
  return [
    ns.e('link'),
    ns.is('active', currentAnchor.value === props.href)
  ];
});

const handleClick = (e) => {
  contextHandleClick(e, props.href)
}

onMounted(async () => {
  addLinks({
    href: props.href,
    el: linkRef.value!
  })
})

</script>