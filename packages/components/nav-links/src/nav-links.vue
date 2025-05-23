<template>
  <nav :class="ns.b()">
    <template v-for="(nav, i) in props.data" :key="i">
      <div v-if="nav?.items?.length" :class="ns.e('group')">
        <span>{{ nav.text }}</span>
        <ja-icon :class="ns.e('icon')" size="14">
          <Arrow></Arrow>
        </ja-icon>
        <div :class="ns.e('item')">
          <a v-for="(item, j) in nav.items" :key="j" :class="linkClasses(item.link)" :href="item.link" :target="isUrlWithHttp(item.link) ? '_blank' : '_self'">
            <span>{{ item.text }}</span>
          </a>
        </div>
      </div>
      <a v-else :class="linkClasses(nav.link)"  :href="nav.link" :target="isUrlWithHttp(nav.link) ? '_blank' : '_self'">
        <span>{{ nav.text }}</span>
      </a>
    </template>
  </nav>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useNamespace } from '@janus-ui/hooks'
import { isUrlWithHttp } from '@janus-ui/utils'
import { Arrow } from '@janus-c/icons-vue'
import { JaIcon } from '@janus-ui/components'

defineOptions({
  name: 'JaNavLinks'
})

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const ns = useNamespace('nav-links')

const linkClasses = (url) => {
  return [
    ns.e('link'),
    ns.is('active', window.location.pathname === url),
  ]
}
</script>
