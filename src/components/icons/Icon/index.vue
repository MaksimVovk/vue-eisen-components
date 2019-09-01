<template>
  <component
    :is="pascalCasedName"
    v-bind="options"
  />
</template>

<script>
  import iconMixin from './icon-mixin'
  import * as icons from './icons'

  const postfix = 'Icon'

  export default {
    components: { ...icons },
    mixins: [iconMixin()],
    props: {
      name: { type: String, required: true },
    },
    computed: {
      pascalCasedName () {
        const result = this.name.replace(/-?\b(\w)/g, (match, letter) => letter.toUpperCase())
        return result.endsWith(postfix) ? result : result + postfix
      }
    }
  }
</script>
