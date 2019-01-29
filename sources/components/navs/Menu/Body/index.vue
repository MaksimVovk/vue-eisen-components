<template>
  <div class="menu-body">
    <template v-for="d of definition">
      <MenuItem :item="d" />
    </template>
  </div>
</template>

<script>
  import MenuItem from './MenuItem'

  export default {
    components: { MenuItem },
    props: {
      definition: { type: Array, required: true },
    }
  }
</script>

<style lang="scss">
  .menu-body {
    width: 100%;
  }
</style>