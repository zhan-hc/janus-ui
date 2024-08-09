

<style scoped lang='scss'>
.theme-item {
  display: inline-block;
  width: 230px;
  margin-top: 20px;
  margin-left: 28px;
}
.color-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0,0,0,.85);
  height: 44px;
  padding: 0 12px;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all .2s;
  &:first-child {
    border-radius: 4px 4px 0 0;
  }
  &:nth-child(n + 7) {
    color: #fff;
  }
}
.color-value {
  opacity: 0;
}

.color-item:hover {
  margin-right: -12px;
  .color-value {
    opacity: 1;
  }
}
</style>
# 主题

主题主要参考 [antd 组件库](https://4x.ant.design/docs/spec/colors-cn) 提供的色彩体系，默认使用的 `Volcano - 火山`为主题色

<div class="theme-item">
    <p>Volcano - 火山</p>
    <div class="color-item" :style="{background: `var(--ja-color-valcano-${item + 1})`}" v-for="item in 10" :key="item">
      <span>{{`volcano-${item}`}}</span>
      <span class="color-value"></span>
    </div>
  </div>