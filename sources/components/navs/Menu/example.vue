<template>
  <div class="menu-example">
    <Menu :pages="pages" />
  </div>
</template>

<style lang="scss">
  .menu-example {
    height: 100%;
  }
</style>

<script>
  export default {
    data () {
      return {
        pages: [
          { path: 'navs/Menu', icon: 'DragIcon', label: 'Menu' },
          { path: 'buttons/flatbutton', icon: 'DragIcon', label: 'example-2' },
          { path: 'navs/Menu', icon: 'DragIcon', label: 'example-3' },
          { path: 'buttons/flatbutton', icon: 'DragIcon', label: 'example-4' },
        ]
      }
    }
  }
</script>