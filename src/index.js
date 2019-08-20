export * from './components'

export default {
  install (Vue) {
    require('./styles/index.scss')

    registerFilters(Vue)
  }
}

function registerFilters (Vue) {
  const getModuleName = path =>
    path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  const filters = require.context('./filters', true, /\.js$/)
  filters
    .keys()
    .forEach(k => Vue.filter(getModuleName(k), filters(k).default))
}
