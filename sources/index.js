import OutsideEvents from 'vue-outside-events'

export default {
  install (Vue) {
    require('./styles/index.scss')

    Vue.use(OutsideEvents)

    const filters = require.context('./filters', true, /\.js$/)
    filters.keys().forEach(k => Vue.filter(getModuleName(k), filters(k).default))

    const directives = require.context('./directives', true, /\.js$/)
    directives.keys().forEach(k => Vue.directives(getModuleName(k), filters(k).default))

    registerComponents(Vue)
  }
}

function getModuleName (path) {
  return path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
}

function registerComponents (Vue) {
  const getComponentName = path => {
    const parts = path.split('/')
    return parts[parts.length - 2]
  }
  const components = require.context('./components', true, /index\.vue$/)
  components
    .keys()
    .forEach(k => Vue.component(getComponentName(k), components(k).default))
}
