<template>
  <div :class="['page', 'custom-scroll', `page_${palette}`]" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      palette: { type: String, default: 'light', validator: x => ['custom', 'light'].includes(x) }
    },
    computed: {
      computedStyle () {
        return this.palette === 'custom' && this.color ? { 'background-color': this.color } : null
      }
    },
  }
</script>

<style lang="scss">
  @import 'colors';

  .page {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    &_light {
      background-color: $background;
    }
  }
</style>
