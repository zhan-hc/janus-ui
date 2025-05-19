export function JanusResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      const  prefix = 'Ja'
      if (name.match(/^Ja[A-Z]/)) {
        const partialName = name.slice(prefix.length)
        const camelStr = partialName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
        const camelArr = camelStr.split('-')
        return {
          from: `janus-ui/lib/components/${camelArr[0]}/src/${camelStr}.vue.js`,
          sideEffects: [`janus-ui/theme-chalk/${camelArr[0]}.css`, `janus-ui/theme-chalk/base.css`],
        }
      }
    }
  }
}
