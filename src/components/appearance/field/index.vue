<template>
  <div
    :class="['field', `field_palette-${palette}`, {
      'field_filled': filled,
      'field_focused': focused,
      'field_disabled': disabled,
      'field_readonly': readonly,
      [`field_size-${size}`]: size,
    }]"
  >
    <slot />
  </div>
</template>

<script>
  import { appearanceMixin } from '../../../mixins'

  export default {
    mixins: [appearanceMixin()],
    props: {
      filled: { type: Boolean, default: false },
      focused: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
    },
  }
</script>

<style lang="scss">

  $borders: (
    success: #29cc97,
    danger: #fe5461,
    warning: #fec400,
    info: #13cae1,
    primary: #4c84ff
  );

  $colors: (
    success: #ccf8e9,
    danger: #fad3d6,
    warning: #fcf3d4,
    info: #cef1f6,
    primary: #e5ecfa
  );

  $palettes: (
    success: (color: map-get($colors, success), border: map-get($borders, success)),
    danger: (color: map-get($colors, danger), border: map-get($borders, danger)),
    warning: (color: map-get($colors, warning), border: map-get($borders, warning)),
    info: (color: map-get($colors, info), border: map-get($borders, info)),
    primary: (color: map-get($colors, primary), border: map-get($borders, primary))
  );

  @mixin field-color-scheme ($color, $border) {
    border-color: $border;
    background-color: $color;

    &:hover:not(.field_disabled),
    &.field_focused:not(.field_disabled) {
      background-color: #fff;
      box-shadow: 0 0 10px 0 $border;
      border-color: $border;
    }
  }

  .field {
    $block: &;

    width: 100%;

    display: flex;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid;

    transition-duration: .2s;

    &:not(#{$block}_filled) {
      background-color: #f0f2f3;
      border-color: #f0f2f3;
    }

    @each $name, $color in $palettes {
      &_palette-#{$name} {
        @include field-color-scheme(map-get($color, color), map-get($color, border));
      }
    }

    &_size-small {
      min-height: 25px;
      padding: 0 10px;

      border-radius: 3px;
    }

    &_size-big {
      min-height: 40px;
      padding: 0 15px;

      border-radius: 5px;
    }
  }
</style>