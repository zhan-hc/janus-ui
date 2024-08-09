<template>
  <div class="theme-item" v-for="item in theme_color" :key="item">
    <p>{{ item }}</p>
    <div class="color-item" :style="{background: `var(--ja-color-${item}-${color})`}" v-for="color in 10" :key="color">
      <span>{{`${item}-${color}`}}</span>
      <span class="color-value"></span>
    </div>
  </div>
</template>

<script lang='ts' setup>
const theme_color = ['red', 'valcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple', 'magenta']

const colorMap = {
  red: {
    'red-1': '#fff1f0',
    'red-2': '#ffccc7',
    'red-3': '#ffa39e',
    'red-4': '#ff7875',
    'red-5': '#ff4d4f',
    'red-6': '#f5222d',
    'red-7': '#cf1322',
    'red-8': '#a8071a',
    'red-9': '#820014',
    'red-10': '#5c0011'
  },
  valcano: {
    'valcano-1': '#fff2e8',
    'valcano-2': '#ffd8bf',
    'valcano-3': '#ffbb96',
    'valcano-4': '#ff9c6e',
    'valcano-5': '#ff7a45',
    'valcano-6': '#fa541c',
    'valcano-7': '#d4380d',
    'valcano-8': '#ad2102',
    'valcano-9': '#871400',
    'valcano-10': '#610b00'
  },
  orange: {
    'orange-1': '#fff7e6',
    'orange-2': '#ffe7ba',
    'orange-3': '#ffd591',
    'orange-4': '#ffc069',
    'orange-5': '#ffa940',
    'orange-6': '#fa8c16',
    'orange-7': '#d46b08',
    'orange-8': '#ad4e00',
    'orange-9': '#873800',
    'orange-10': '#612500'
  },
  gold: {
    'gold-1': '#fffbe6',
    'gold-2': '#fff1b8',
    'gold-3': '#ffe58f',
    'gold-4': '#ffd666',
    'gold-5': '#ffc53d',
    'gold-6': '#faad14',
    'gold-7': '#d48806',
    'gold-8': '#ad6800',
    'gold-9': '#874d00',
    'gold-10': '#613400'
  },
  yellow: {
    'yellow-1': '#feffe6',
    'yellow-2': '#ffffb8',
    'yellow-3': '#fffb8f',
    'yellow-4': '#fff566',
    'yellow-5': '#ffec3d',
    'yellow-6': '#fadb14',
    'yellow-7': '#d4b106',
    'yellow-8': '#ad8b00',
    'yellow-9': '#876800',
    'yellow-10': '#614700'
  },
  lime: {
    'lime-1': '#fcffe6',
    'lime-2': '#f4ffb8',
    'lime-3': '#eaff8f',
    'lime-4': '#d3f261',
    'lime-5': '#bae637',
    'lime-6': '#a0d911',
    'lime-7': '#7cb305',
    'lime-8': '#5b8c00',
    'lime-9': '#3f6600',
    'lime-10': '#254000'
  },
  green: {
    'green-1': '#f6ffed',
    'green-2': '#d9f7be',
    'green-3': '#b7eb8f',
    'green-4': '#95de64',
    'green-5': '#73d13d',
    'green-6': '#52c41a',
    'green-7': '#389e0d',
    'green-8': '#237804',
    'green-9': '#135200',
    'green-10': '#092b00'
  },
  cyan: {
    'cyan-1': '#e6fffb',
    'cyan-2': '#b5f5ec',
    'cyan-3': '#87e8de',
    'cyan-4': '#5cdbd3',
    'cyan-5': '#36cfc9',
    'cyan-6': '#13c2c2',
    'cyan-7': '#08979c',
    'cyan-8': '#006d75',
    'cyan-9': '#00474f',
    'cyan-10': '#002329'
  },
  blue: {
    'blue-1': '#e6f7ff',
    'blue-2': '#bae7ff',
    'blue-3': '#91d5ff',
    'blue-4': '#69c0ff',
    'blue-5': '#40a9ff',
    'blue-6': '#1890ff',
    'blue-7': '#096dd9',
    'blue-8': '#0050b3',
    'blue-9': '#003a8c',
    'blue-10': '#002766'
  },
  geekblue: {
    'geekblue-1': '#f0f5ff',
    'geekblue-2': '#d6e4ff',
    'geekblue-3': '#adc6ff',
    'geekblue-4': '#85a5ff',
    'geekblue-5': '#597ef7',
    'geekblue-6': '#2f54eb',
    'geekblue-7': '#1d39c4',
    'geekblue-8': '#10239e',
    'geekblue-9': '#061178',
    'geekblue-10': '#030852'
  },
  purple: {
    'purple-1': '#f9f0ff',
    'purple-2': '#efdbff',
    'purple-3': '#d3adf7',
    'purple-4': '#b37feb',
    'purple-5': '#9254de',
    'purple-6': '#722ed1',
    'purple-7': '#531dab',
    'purple-8': '#391085',
    'purple-9': '#22075e',
    'purple-10': '#120338'
  },
  magenta: {
    'magenta-1': '#fff0f6',
    'magenta-2': '#ffd6e7',
    'magenta-3': '#ffadd2',
    'magenta-4': '#ff85c0',
    'magenta-5': '#f759ab',
    'magenta-6': '#eb2f96',
    'magenta-7': '#c41d7f',
    'magenta-8': '#9e1068',
    'magenta-9': '#780650',
    'magenta-10': '#520339'
  }
}

</script>

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