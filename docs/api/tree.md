<script setup lang="ts">
  import { JaTree } from '@janus-ui/components'

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
  const load = (node) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          [{
            label: 'Level 我是接口加载获取的数据 1-1'
          }])
      }, 1000)
    })
  }
</script>
# Tree - 树

## 基础用法

  <ja-tree :data="treeData">
  </ja-tree>

  ```
  // html
  <ja-tree :data="treeData">
  </ja-tree>


  // js
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
  ```

  ## 自定义节点内容

  <ja-tree :data="treeData">
    <template #default="{ node }">
    <span>这是自定义树节点 => </span>
      <span>{{ node.label }}</span>
    </template>
  </ja-tree>

  ```
  <ja-tree :data="treeData">
    <template #default="{ node }">
      <span>{{ node.label }}</span>
      <button>按钮</button>
    </template>
  </ja-tree>
  ```


  ## 懒加载树节点

  <ja-tree :data="treeData" lazy :load="load">
  </ja-tree>

  ```
  // html
  <ja-tree :data="treeData">
    <template #default="{ node }">
      <span>{{ node.label }}</span>
      <button>按钮</button>
    </template>
  </ja-tree>


  // js
  const load = (node) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        [{
          label: 'Level 我是接口加载获取的数据 1-1'
        }])
    }, 1000)
  })
}
  ```

## Tree API​
### Tree Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 展示数据 | Array | - | - |
| nodeProps | 配置选项，具体看下表 | `Props` |  |  |
| nodeKey | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | string |  |  |
| expandedKeys | 默认展开的节点的 key 的数组 | string |  |  |
| icon | 自定义树节点图标组件 | string / Component |  | Arrow |
| lazy | 是否懒加载子节点，需与 load 方法结合使用 | boolean |  | false |
| load | 加载子树数据的方法，仅当 lazy 属性为true 时生效 | string |  |  |

### Tree Attributes-nodeProps Props
| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| label | 指定节点标签为节点对象的某个属性值 | `label` |
| children | 指定子树为节点对象的某个属性值 | `children` |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | `disabled` |

### Tree Events
| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| nodeClick | 树节点点击时触发 | `(node: node) => void` |
  
