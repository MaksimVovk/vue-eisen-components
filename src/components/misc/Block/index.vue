<template>
  <div
    :class="['block', `block_padding-${padding}`, `block_border-${border}`, {
      'block_shadow': shadow,
      'block_animation': animation
    }]"
    :style="blockStyles"
  >
    <slot />
  </div>
</template>

<script>
  const types = ['light', 'regular', 'bold']

  export default {
    props: {
      padding: { type: String, default: () => 'bold', validator: value => types.includes(value) },
      border: { type: String, default: () => 'regular', validator: value => types.includes(value) },
      them: { type: String, default: () => 'regular', validator: value => types.includes(value) },
      shadow: { type: Boolean, default: () => false },
      animation: { type: Boolean, default: () => false },
      width: { type: [String, Number], default: () => null },
    },
    computed: {
      blockStyles () {
        return {
          width: this.width ? `${this.width}px` : null,
        }
      }
    }
  }
</script>

<style lang="scss">
  .block {
    $block: &;

    background-color: #fff;
    transition: box-shadow .2s ease-in;

    &_padding-light {
      padding: 5px;
    }

    &_padding-regular {
      padding: 10px;
    }

    &_padding-bold {
      padding: 20px;
    }

    &_border-light {
      border-radius: 3px;
    }

    &_border-regular {
      border-radius: 5px;
    }

    &_border-bold {
      border-radius: 8px;
    }

    &_shadow:not(#{$block}_animation) {
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .15);
    }

    &_animation {
      cursor: pointer;

      &:hover {
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .15);
      }
    }

  }
</style>