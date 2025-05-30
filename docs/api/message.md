<script setup lang="ts">
  import { JaMessage } from 'janus-ui'

  const onClick = () => {
    JaMessage({
      msg: '消息提示'
    })
  }
</script>

# message - 消息

## 基础用法

  <button @click="onClick">点击我弹消息</button>
    

  ```
  import { JaMessage } from '@janus-ui'

  const onClick = () => {
    JaMessage({
      msg: '消息提示'
    })
  }
  ```


## message API​
### message Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| msg | 标题 | string| - | - |
| duration | 展示时长 | string | 0则不关闭 | 3000 |