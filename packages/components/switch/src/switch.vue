<template>
  <div :class="swtichClasses" @click.prevent="switchClick">
    <div :class="ns.e('handle')">
      <JaIcon v-if="activeIcon || inactiveIcon">
        <component :is="modelValue ? activeIcon : inactiveIcon" />
      </JaIcon>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch } from 'vue'
import type { PropType } from 'vue'
import { UPDATE_MODEL_EVENT, ComponentSize, CHANGE_EVENT } from '@janus-ui/constants'
import { useNamespace } from '@janus-ui/hooks'
import { iconPropType } from '@janus-ui/utils'
import { JaIcon } from '@janus-ui/components'

defineOptions({
  name: 'JaSwitch'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeIcon: {
    type: iconPropType,
  },
  inactiveIcon: {
    type: iconPropType,
  },
})

const emits = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT])

const ns = useNamespace('switch')

watch(
  () => props.modelValue,
  (newValue) => {
    emits(CHANGE_EVENT, newValue)
  },
)

const switchClick = () => {
  if (props.disabled) return
  emits(UPDATE_MODEL_EVENT, !props.modelValue)
}

const swtichClasses = computed(() => {
  return [
    ns.b(),
    ns.is('checked', props.modelValue),
    ns.is('disabled', props.disabled),
    ns.m(props.size)
  ]
})



</script>