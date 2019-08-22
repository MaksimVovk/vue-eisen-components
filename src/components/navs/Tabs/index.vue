<template>
  <div class="tabs">
    <div
      v-for="o of options"
      :key="o.id"
      :class="['tabs__item', {
        'tabs__item_selected': o.id === value,
      }]"
      @click="$emit('input', o.id)"
    >
      {{ o.name }}
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../../styles/palettes';

  .tabs {
    @mixin flexbox ($align, $justify) {
      display: flex;
      align-items: $align;
      justify-content: $justify;
      box-sizing: border-box;
    }

    @include flexbox(center, center);

    color: map-get($main, primary);
    transition-duration: .2s;

    &__item {
      @include flexbox(center, center);

      padding: 10px 0;
      border-bottom: 1px solid transparent;
      white-space: nowrap;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 25px;
      }

      &_selected,
      &:hover {
        color: map-get($text, primary);
        border-bottom-color: map-get($main, primary);
      }
    }
  }
</style>

<script>
  export default {
    props: {
      value: { type: [String, Number], required: true },
      options: { type: Array, required: true },
    },
  }
</script>
