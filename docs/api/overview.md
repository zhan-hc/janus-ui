<script setup lang="ts">
  import { ref } from 'vue'
  import { JaIcon, JaCard, JaSwitch, JaAnchor, JaAnchorLink, JaTree, JaMessage } from 'janus-ui'
  import { Comment, Date, Home } from '@janus-c/icons-vue'

  const switchStatus = ref(true)
  const onClick = () => {
    JaMessage({
      msg: '消息提示'
    })
  }
  const links = [
    {
      text: '组件总览',
      link: '/api/overview.html'
    },
    {
      text: '导航链接',
      link: '/api/navLinks.html'
    }
  ]
  const treeData = [
    {
      label: 'Level one 1',
      children: [
        {
          label: 'Level two 1-1'
        },
      ],
    },
    {
      label: 'Level one 2',
      children: [
        {
          label: 'Level two 2-1',
          children: [
            {
              label: 'Level three 2-1-1',
            },
          ],
        },
        {
          label: 'Level two 2-2',
          children: [
            {
              label: 'Level three 2-2-1',
            },
          ],
        },
      ],
    }
  ]
</script>
<style>

  .ja-card {
    width: 334px;
    margin-bottom: 20px;
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
  <div style="width: fit-content;" class="ja-hover ja-hover--border-around">边框环绕</div>
  <div style="width: fit-content; padding: 10px 20px;" class="ja-hover ja-hover--frame-content">展示菜单</div>

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

<ja-card>
  <template #header>
    <span>消息 - Message</span>
  </template>
  <button @click="onClick">click</button>
</ja-card>


<ja-card style="margin-right: 20px">
  <template #header>
    <span>树 - Tree</span>
  </template>
  <ja-tree :data="treeData">
  </ja-tree>
</ja-card>

<ja-card>
  <template #header>
    <span>导航链接 - NavLinks</span>
  </template>
  <ja-nav-links :data="links"></ja-nav-links>
</ja-card>