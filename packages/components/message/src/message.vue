<template>
  <transition :name="ns.b('fade')"  @after-leave="onDestroy">
    <div v-show="visible" :class="ns.b()">
      <ja-icon size="20">
        <WarningFilled></WarningFilled>
      </ja-icon>
      <span :class="ns.e('text')">{{ msg }}</span>
      <ja-icon :class="ns.e('close')" size="20" color="#a8abb2" @click="close">
        <Close></Close>
      </ja-icon>
    </div>
  </transition>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { useNamespace } from '@janus-ui/hooks'
import { iconPropType } from '@janus-ui/utils'
import { JaIcon } from '@janus-ui/components'
import { WarningFilled, Close } from '@janus-c/icons-vue'

defineOptions({
  name: 'JaMessage'
})
const visible = ref(false)
const props = defineProps({
  msg: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  },
})
const emits = defineEmits(['destroy'])

const ns = useNamespace('message')

const close = () => {
  visible.value = false
}

const onDestroy = (e) => {
  emits('destroy')
}

function startTimer() {
  if (props.duration === 0) return
  useTimeoutFn(() => {
    close()
  }, props.duration)
}

onMounted(() => {
  startTimer()
  visible.value = true
})

defineExpose({
  close,
  visible
})

</script>