<template>
  <div
    class="container"
    :style="containerStyles"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      columns: { type: Number, default: () => null },
      rows: { type: Number, default: () => null },
    },
    computed: {
      containerStyles () {
        const result = {}

        if (this.columns) {
          result['grid-template-columns'] = `repeat(${this.columns}, 1fr)`
        }

        if (this.rows) {
          result['grid-template-rows'] = `repeat(${this.rows}, 1fr)`
        }

        return result
      }
    }
  }
</script>

<style lang="scss">
  .container {
    $block: &;

    display: grid;
    grid-gap: 10px;

  }
</style>