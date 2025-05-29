import { createVNode, render } from 'vue'
import MessageConstructor from './message.vue'

const messageInstance = (option = {}) => createMessage(option)

function createMessage (options = {}) {
  const container = document.createElement('div')
  const props = {
    appendTo: document.body,
    ...options,
    onDestroy: () => {
      render(null, container)
    }
  }
  const vnode = createVNode(MessageConstructor, props)
  render(vnode, container)
  const vm = vnode.component!
  props.appendTo.appendChild(container.firstElementChild!)
  return vm.exposed
}
export default messageInstance