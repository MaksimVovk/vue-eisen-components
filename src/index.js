import Hoist from './directives/hoist'
import Focus from './directives/focus'
import ScrollOutside from './directives/scroll-outside'
import OutsideEvents from './directives/click-outside'

export * from './components'

export default {
  install (Vue) {
    require('./styles/index.scss')

    Vue.directive('hoisted', Hoist)
    Vue.directive('focus', Focus)
    Vue.directive('scroll-outside', ScrollOutside)
    Vue.directive('click-outside', OutsideEvents)

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
