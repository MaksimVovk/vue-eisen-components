import { map, groupBy } from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from './index.vue'
import ui from '../sources'

Vue.use(VueRouter)
Vue.use(ui)

const context = require.context('../sources/components', true, /example\.vue$/)

const items = context.keys().map(k => {
  const [category, name] = k.replace(/\.vue$/, '').split('/').slice(1)
  return ({ category, name, component: context(k).default })
})

const folders = map(groupBy(items, it => it.category), (pages, name) => ({ name, pages }))

const routes = folders.map(f => ({
  path: `/${f.name}`,
  label: f.name,
  component: { render: h => h('router-view') },
  children: f.pages.map(p => ({
    path: p.name,
    component: p.component,
    label: p.name,
  })),
}))

const router = new VueRouter({ mode: 'history', routes })

Vue.component('layout', layout)

new Vue({
  el: '#root',
  router,
  render: h => h('layout'),
})
