<template>
  <svg
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :class="[
      'icon',
      name,
      `icon_palette_${palette}`, {
        'icon_focused': focused,
        'icon_disabled': disabled,
        'icon_clickable': !disabled && clickListener,
      },
    ]"
    xmlns="http://www.w3.org/2000/svg"
    @click="!disabled && clickListener && clickListener()"
  >
    <slot />
  </svg>
</template>

<script>
  import iconMixin from './../Icon/icon-mixin'

  export default {
    mixins: [iconMixin()],
    props: {
      viewBox: { type: String, required: true },
      clickListener: { type: Function, default: undefined },
    },
    computed: {
      name () {
        return this.$parent.$options._componentTag
          .replace(/([A-Z])/g, m => '-' + m.toLowerCase())
          .slice(1)
      },
    },
  }
</script>

<style lang="scss">
  $colors: (
    neutral: #fff,
    light: #a0a7af,
    dark: #2c3239,
    success: #13acac,
    danger: #fd4949
  );

  $palettes: (
    neutral: (map-get($colors, light), map-get($colors, neutral)),
    light: (map-get($colors, light), map-get($colors, light)),
    dark: (map-get($colors, light), map-get($colors, dark)),
    success: (map-get($colors, light), map-get($colors, success)),
    danger: (map-get($colors, light), map-get($colors, danger))
  );

  .icon {
    &_clickable {
      cursor: pointer;
    }

    &_disabled {
      cursor: not-allowed;
    }

    @each $name, $value in $palettes {
      &.icon_palette_#{$name} {
        & .icon__geometry {
          fill: nth($value, 1);
        }

        &:hover:not(.icon_disabled),
        &.icon_focused:not(.icon_disabled) {
          & .icon__geometry {
            fill: nth($value, 2);
          }
        }
      }
    }
  }
</style>