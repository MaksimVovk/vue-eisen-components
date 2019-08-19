<template>
  <div
    :class="['button', `button_size-${size}`, `button_palette-${palette}`, {
      'button_disabled': disabled,
      'button_roud': roud,
    }]"
  >
    <slot />
  </div>
</template>

<script>
  const sizes = ['small', 'big']
  const palettes = ['primary', 'success', 'warning', 'danger', 'info']

  export default {
    props: {
      size: { type: String, default: 'big', validator: value => sizes.includes(value) },
      palette: { type: String, default: 'primary', validator: value => palettes.includes(value) },
      disabled: { type: Boolean, default: false },
      roud: { type: Boolean, default: false },
    }
  }
</script>

<style lang="scss">
  .button {
    $colors: (
      success: #29cc97,
      danger: #fe5461,
      warning: #fec400,
      info: #13cae1,
      primary: #4c84ff
    );

    @mixin button-color-scheme ($color) {
      background-color: $color;

      &.button_disabled {
        opacity: .5;
        cursor: not-allowed;
      }

      &:not(.button_disabled):hover {
        opacity: .7;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15);
      }
    }

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    cursor: pointer;

    transition: 0.2s ease-in;

    &_size {
      &-big {
        height: 40px;
        border-radius: 5px;
      }

      &-small {
        height: 25px;
        border-radius: 3px;
      }
    }

    @each $name, $color in $colors {
      &_palette-#{$name} {
        @include button-color-scheme($color);
      }
    }
  }
</style>