<script setup lang="ts">
  import { ref } from 'vue'
  import { JaIcon, JaCard, JaSwitch, JaAnchor, JaAnchorLink } from '@janus-ui/components'
  import { Comment, Date, Home } from '@janus-c/icons-vue'

  const switchStatus = ref(true)
</script>
<style>

  .ja-card {
    width: 334px;
  }
  .ja-card__body {
    height: 140px;
  }

.item-icon {
  width: 50px;
  height: 50px;
  margin-right: 12px;
  background: var(--ja-bg-color);
  border-radius: 4px;
}
.is--active {
  border: 1px solid var(--ja-color-primary-border);
  color: var(--ja-color-primary);
}

</style>

# Overview - 组件总览

## 基础组件

<ja-card>
  <template #header>
    <span>图标</span>
  </template>
  <ja-icon class="item-icon is--active" size="32">
    <Comment />
  </ja-icon>
  <ja-icon class="item-icon" size="32">
    <Date />
  </ja-icon>
  <ja-icon class="item-icon" size="32">
    <Home />
  </ja-icon>
</ja-card>



## 动画

<ja-card>
  <template #header>
    <span>hover - 动画</span>
  </template>
  <div class="ja-hover ja-hover--border-around" style="display: inline-block;">hover 悬浮</div>
</ja-card>

## 常用组件

<ja-card style="margin-right: 20px">
  <template #header>
    <span>锚点 - Anchor</span>
  </template>
  <ja-anchor container="#VPContent">
    <ja-anchor-link href="#基础组件" title="基础组件"></ja-anchor-link>
    <ja-anchor-link href="#动画" title="动画"></ja-anchor-link>
    <ja-anchor-link href="#常用组件" title="常用组件"></ja-anchor-link>
  </ja-anchor>
</ja-card>
<ja-card>
  <template #header>
    <span>开关 - Switch</span>
  </template>
  <ja-switch v-model="switchStatus" size="default"></ja-switch>
</ja-card>