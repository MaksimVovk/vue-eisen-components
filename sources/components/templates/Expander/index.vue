<template>
  <div
    :class="['expander', {
      'expander_vertical': vertical,
      'expander_centered': centered,
  }]">
    <div :class="['expander__edge', { 'expander__edge_vertical': vertical }]"><slot name="before" /></div>
    <div class="expander__content"><slot /></div>
    <div :class="['expander__edge', { 'expander__edge_vertical': vertical }]"><slot name="after" /></div>
  </div>
</template>

<style lang="scss">
  .expander {
    flex: 1;
    display: flex;
    min-width: 0;
    min-height: 0;

    &_centered {
      align-items: center;
    }

    &#{&}_vertical {
      flex-direction: column;
    }

    & > &__edge {
      flex: 0 0 auto;
      display: flex;

      &:not(.expander__edge_vertical) {
        align-items: center;
      }

      &_vertical {
        flex-direction: column;
      }
    }

    & > &__content {
      flex: 1;
      display: flex;
      min-width: 0;
      min-height: 0;
    }
  }
</style>

<script>
  export default {
    props: {
      centered: { type: Boolean, default: false },
      vertical: { type: Boolean, default: false },
    },
  }
</script>
