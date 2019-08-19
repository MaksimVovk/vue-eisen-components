import Vue from 'vue'
import VueRouter from 'vue-router'
import { groupBy, map } from 'lodash'

import kit from '../src'
import { AppLayout, Example, ExampleBlock } from '../src'


Vue.use(VueRouter)
Vue.use(kit)

Vue.component('AppLayout', AppLayout)
Vue.component('Example', Example)
Vue.component('ExampleBlock', ExampleBlock)

const context = require.context('../src/components', true, /example\.vue$/)

const items = context.keys().map(k => {
  const [category, ...names] = k.replace(/\.vue$/, '').split('/').slice(1)
  return ({
    category,
    name: names
      .filter(n => n !== 'example')
      .map(n => n.replace('.example', ''))
      .join(': '),
    component: context(k).default,
  })
})

const folders = map(groupBy(items, it => it.category), (pages, name) => {
  return ({ name, pages })
})

const routes = folders.map(f => ({
  icon: 'eye',
  path: `/${f.name}`,
  label: f.name,
  component: { render: h => h('router-view') },
  children: f.pages.map(p => ({
    path: `/${f.name}/${p.name}`,
    component: p.component,
    label: p.name,
  })),
}))

const router = new VueRouter({ mode: 'history', routes })

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  mounted () {
    document.title = 'vue-eisen-components'
  },
  render (h) {
    return h('AppLayout', {
      props: {
        pages: routes
      }
    })
  },
})