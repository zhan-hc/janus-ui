<script setup lang="ts">
  const theme = {
    valcano: {
      name: 'Volcano / 火山',
      desc: '醒目、澎湃',
      colors: {
        '1': '#fff2e8',
        '2': '#ffd8bf',
        '3': '#ffbb96',
        '4': '#ff9c6e',
        '5': '#ff7a45',
        '6': '#fa541c',
        '7': '#d4380d',
        '8': '#ad2102',
        '9': '#871400',
        '10': '#610b00'
      }
    },
    blue: {
      name: 'Daybreak Blue / 拂晓蓝',
      desc: '包容、科技、普惠',
      colors: {
        '1': '#e6f7ff',
        '2': '#bae7ff',
        '3': '#91d5ff',
        '4': '#69c0ff',
        '5': '#40a9ff',
        '6': '#1890ff',
        '7': '#096dd9',
        '8': '#0050b3',
        '9': '#003a8c',
        '10': '#002766'
      }
    },
    cyan: {
      name: 'Cyan / 明青',
      desc: '希望、坚强',
      colors: {
        '1': '#e6fffb',
        '2': '#b5f5ec',
        '3': '#87e8de',
        '4': '#5cdbd3',
        '5': '#36cfc9',
        '6': '#13c2c2',
        '7': '#08979c',
        '8': '#006d75',
        '9': '#00474f',
        '10': '#002329'
      }
    },
    geekblue: {
      name: 'Geek Blue / 极客蓝',
      desc: '探索、钻研',
      colors: {
        '1': '#f0f5ff',
        '2': '#d6e4ff',
        '3': '#adc6ff',
        '4': '#85a5ff',
        '5': '#597ef7',
        '6': '#2f54eb',
        '7': '#1d39c4',
        '8': '#10239e',
        '9': '#061178',
        '10': '#030852'
      }
    },
    gold: {
      name: 'Calendula Gold / 金盏花',
      desc: '活力、积极',
      colors: {
        '1':'#fffbe6',
        '2': '#fff1b8',
        '3': '#ffe58f',
        '4': '#ffd666',
        '5': '#ffc53d',
        '6': '#faad14',
        '7': '#d48806',
        '8': '#ad6800',
        '9': '#874d00',
        '10': '#613400'
      }
    },
    green: {
      name: 'Polar Green / 极光绿',
      desc: '健康、创新',
      colors: {
        '1': '#f6ffed',
        '2': '#d9f7be',
        '3': '#b7eb8f',
        '4': '#95de64',
        '5': '#73d13d',
        '6': '#52c41a',
        '7': '#389e0d',
        '8': '#237804',
        '9': '#135200',
        '10': '#092b00'
      }
    },
    yellow: {
      name: 'Sunrise Yellow / 日出',
      desc: '出生、阳光',
      colors: {
        '1': '#feffe6',
        '2': '#ffffb8',
        '3': '#fffb8f',
        '4': '#fff566',
        '5': '#ffec3d',
        '6': '#fadb14',
        '7': '#d4b106',
        '8': '#ad8b00',
        '9': '#876800',
        '10': '#614700'
      }
    },
    lime: {
      name: 'Lime / 青柠',
      desc: '自然、生机',
      colors: {
        '1': '#fcffe6',
        '2': '#f4ffb8',
        '3': '#eaff8f',
        '4': '#d3f261',
        '5': '#bae637',
        '6': '#a0d911',
        '7': '#7cb305',
        '8': '#5b8c00',
        '9': '#3f6600',
        '10': '#254000'
      }
    },
    magenta: {
      name: 'Magenta / 法式洋红',
      desc: '明快、感性',
      colors: {
        '1': '#fff0f6',
        '2': '#ffd6e7',
        '3': '#ffadd2',
        '4': '#ff85c0',
        '5': '#f759ab',
        '6': '#eb2f96',
        '7': '#c41d7f',
        '8': '#9e1068',
        '9': '#780650',
        '10': '#520339'
      }
    },
    orange: {
      name: 'Sunset Orange / 日暮',
      desc: '温暖、欢快',
      colors: {
        '1': '#fff7e6',
        '2': '#ffe7ba',
        '3': '#ffd591',
        '4': '#ffc069',
        '5': '#ffa940',
        '6': '#fa8c16',
        '7': '#d46b08',
        '8': '#ad4e00',
        '9': '#873800',
        '10': '#612500'
      }
    },
    purple: {
      name: 'Golden Purple / 酱紫',
      desc: '优雅、浪漫',
      colors: {
        '1': '#f9f0ff',
        '2': '#efdbff',
        '3': '#d3adf7',
        '4': '#b37feb',
        '5': '#9254de',
        '6': '#722ed1',
        '7': '#531dab',
        '8': '#391085',
        '9': '#22075e',
        '10': '#120338'
      }
    },
    red: {
      name: 'Dust Red / 薄暮',
      desc: '斗志、奔放',
      colors: {
        '1': '#fff1f0',
        '2': '#ffccc7',
        '3': '#ffa39e',
        '4': '#ff7875',
        '5': '#ff4d4f',
        '6': '#f5222d',
        '7': '#cf1322',
        '8': '#a8071a',
        '9': '#820014',
        '10': '#5c0011'
      }
    },
  }
  </script>

<style scoped lang='scss'>
.theme-item {
  display: inline-block;
  width: 230px;
  margin-top: 40px;
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
.theme-desc {
  font-size: 12px;
  color: #666;
}
</style>
# 主题

主题主要参考 [antd 组件库](https://4x.ant.design/docs/spec/colors-cn) 提供的色彩体系，默认使用的 `Volcano - 火山`为主题色

使用对应的主题色 只需要在main.ts文件中 `import` 对应的主题样式即可

```
import 'janus-ui/theme-chalk/themes/valcano.css'
import 'janus-ui/theme-chalk/themes/blue.css'
import 'janus-ui/theme-chalk/themes/geekblue.css'
import 'janus-ui/theme-chalk/themes/gold.css'
import 'janus-ui/theme-chalk/themes/cyan.css'
import 'janus-ui/theme-chalk/themes/lime.css'
import 'janus-ui/theme-chalk/themes/magenta.css'
import 'janus-ui/theme-chalk/themes/green.css'
import 'janus-ui/theme-chalk/themes/orange.css'
import 'janus-ui/theme-chalk/themes/red.css'
import 'janus-ui/theme-chalk/themes/yellow.css'
import 'janus-ui/theme-chalk/themes/purple.css'
```

<div class="theme-list">
<div class="theme-item" v-for="(t, i) in theme" :key="i">
    <p>{{t.name}}</p>
    <p class="theme-desc">{{t.desc}}</p>
    <div class="color-item" :style="{background: c}" v-for="(c, j) in t.colors" :key="j">
      <span>{{`volcano-${j}`}}</span>
      <span class="color-value"></span>
    </div>
  </div>
  </div>