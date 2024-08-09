<script setup lang="ts">
  import { ref } from 'vue'
  import { JaSwitch } from '@janus-ui/components'
  import { Sun, Moon } from '@janus-c/icons-vue'

  const switchStatus = ref(false)
  const sizeStatus = ref(true)
  const disabledStatus = ref(true)
  const iconStatus = ref(false)

</script>

# Switch - 开关

## 基础用法
  绑定 v-model 到一个 Boolean 类型的变量。 可以使用 `--ja-switch-on-color` 属性与 `--ja-switch-off-color` 属性来设置开关的背景色。

  <ja-switch v-model="switchStatus"></ja-switch>

  ```
  <ja-switch v-model="switchStatus"></ja-switch>
  ```

  ## 尺寸

  <ja-switch v-model="sizeStatus" size="large"></ja-switch>
  <br />
  <ja-switch v-model="sizeStatus" size="default"></ja-switch>
  <br />
  <ja-switch v-model="sizeStatus" size="small"></ja-switch>

  ```
  <ja-switch v-model="sizeStatus" size="large"></ja-switch>
  <ja-switch v-model="sizeStatus" size="default"></ja-switch>
  <ja-switch v-model="sizeStatus" size="small"></ja-switch>
  ```

  ## 禁用状态
  设置disabled属性，接受一个Boolean，设置true即可禁用。

  <ja-switch v-model="disabledStatus" disabled style="margin-right: 10px;"></ja-switch>
  <ja-switch v-model="disabledStatus"></ja-switch>

  ```
   <ja-switch v-model="disabledStatus" disabled></ja-switch>
  ```

  ## 自定义动作图标
  使用 inactive-icon 和 active-icon 属性来添加图标。
  <ja-switch v-model="iconStatus" :active-icon="Moon" :inactive-icon="Sun"></ja-switch>

  ```
  import { Sun, Moon } from '@janus-c/icons-vue'

  <ja-switch v-model="iconStatus" :active-icon="Moon" :inactive-icon="Sun"></ja-switch>
  ```

## Switch API​
### Switch Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | `boolean` | - | `false` |
| size | 尺寸 | `large` `default` `small` | - | `default` |
| disabled | 是否禁用 | `boolean` | - | `false` |
| active-icon | 选中时的图标 | `Component` | - | `-` |
| inactive-icon | 未选中时的图标 | `Component` | - | `-` |

### Switch Events
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 状态发生变化时的回调 | `(value: boolean) => void` |

