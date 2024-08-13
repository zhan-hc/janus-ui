<script setup lang="ts">
import { ref } from 'vue'
import ColorPanel from './components/color-panel.vue'
import { useDark, useToggle } from '@vueuse/core' 
import { Date, Arrow, Loading, Sun, Moon } from '@janus-c/icons-vue'
import * as Icons from '@janus-c/icons-vue/dist/index'
import { JaAnchor, JaAnchorLink, JaCard, JaIcon, JaSwitch } from '../../packages/janus-ui'
const switchStatus = ref(false)
const themeStatus = ref(false)
const isDark = useDark()
const toggleDark = useToggle(isDark)
const themeChange = (val) => {
  toggleDark()
}

</script>

<template>
  <div class="wrap">
    <ja-anchor container=".container">
      <ja-anchor-link href="#section1" title="hover特效"></ja-anchor-link>
      <ja-anchor-link href="#section4" title="icon-图标"></ja-anchor-link>
      <ja-anchor-link href="#section3" title="switch-开关"></ja-anchor-link>
      <ja-anchor-link href="#section2" title="主题色"></ja-anchor-link>
    </ja-anchor>
    <div class="container">
      <div id="section1">
        <p>hover特效</p>
        <p class="hover-item ja-hover--text-link">文本下划线</p>
        <p class="hover-item ja-hover--border-around">边框环绕</p>
        <p class="hover-item ja-hover--contrast-progress">反差颜色进度</p>
        <p class="hover-item ja-hover--frame-content">展示菜单</p>
      </div>
      <div id="section4">
        <ja-card>
          <template #header>
            <span>header</span>
          </template>
          <template #footer>
            <span>footer</span>
          </template>
        </ja-card>
        <p>icon-图标</p>
        <JaIcon size="20">
          <Arrow></Arrow>
        </JaIcon>
        <JaIcon size="20">
          <Date></Date>
        </JaIcon>
        <JaIcon size="20" class="is-loading">
          <Loading></Loading>
        </JaIcon>
        <!-- <Date></Date> -->
      </div>
      <div id="section3">
        <p>switch-开关</p>

        <div style="display: flex;align-items: center;">
          <div>不同尺寸</div>
          <div style="margin-right: 20px;">
            <span>large: </span>
            <ja-switch v-model="switchStatus" size="large"></ja-switch>
          </div>
          <div style="margin-right: 20px;">
            <span>default: </span>
            <ja-switch v-model="switchStatus" size="default"></ja-switch>
          </div>
          <div style="margin-right: 20px;">
            <span>small: </span>
            <ja-switch v-model="switchStatus" size="small"></ja-switch>
          </div>
        </div>
        <div>
          <div style="display: flex;align-items: center;">
            <div>不同状态</div>
            <div style="margin-right: 20px;">
              <span>disabled: </span>
              <ja-switch v-model="switchStatus" disabled></ja-switch>
            </div>
            <div>
              <span>icon </span>
              <ja-switch
                style="--ja-switch-on-color: #2c2c2c;--ja-switch-off-color:#f2f2f2;fontSize: 14px;" 
                v-model="themeStatus" :active-icon="Moon" :inactive-icon="Sun"
                @change="themeChange"></ja-switch>
            </div>
          </div>
        </div>
      </div>
      <div id="section2">
        <p>主题色</p>
        <color-panel></color-panel>
      </div>
    </div>
    <!-- 更多内容 -->
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  width: 80vw;
  background: var(--ja-bg-color);
}
.container {
  flex: 1;
  height: 80vh;
  overflow-y: scroll;
}
.hover-item {
  display: inline-block;
  cursor: pointer;
  margin-left: 20px;
}

.ja-hover--contrast-progress {
  position: relative;
  background: #fff;
  color: #000;
  padding: 3px 12px;
  border: 1px solid #000;
  box-sizing: border-box;
  transition: 1s;
}

.ja-hover--frame-content {
  padding: 3px 12px;
}

</style>
