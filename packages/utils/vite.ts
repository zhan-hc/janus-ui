export function JanusResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      const  prefix = 'Ja'
      if (name.match(/^Ja[A-Z]/)) {
        const partialName = name.slice(prefix.length)
        const camelStr = partialName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
        const camelArr = camelStr.split('-')
        const notStyleComs = ['JaCollapseTransition']
        const childComs = ['JaAnchorLink'] // 子组件在父组件目录中
        const comFolder = childComs.includes(name) ? camelArr[0] : camelStr
        const from = childComs.includes(name) ? `janus-ui/lib/components/${comFolder}/src/${camelStr}.vue.js` : `janus-ui/lib/components/${comFolder}/index.js`
        return {
          from,
          sideEffects: notStyleComs.includes(name) ? '' : [`janus-ui/theme-chalk/${camelStr}.css`, `janus-ui/theme-chalk/base.css`],
        }
      }
    }
  }
}
