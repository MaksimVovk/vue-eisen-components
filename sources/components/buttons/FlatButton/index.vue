<template>
  <div
    :class="['flat-button', `flat-button_palette_${palette}`]"
    @click="$emit('click')"
  >
    <slot name="before" />
    <span
      v-if="$slots.default"
      class="flat-button__label"
    ><slot /></span>
    <slot name="after" />
  </div>
</template>

<style lang="scss">
  @import 'colors';

  .flat-button {
    display: inline-flex;
    align-items: center;

    cursor: pointer;
    color: #777;

    & > * {
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }

    .flat-button__label {
      font-size: 13px;
    }

    .flat-button:hover .flat-button__label {
      text-decoration: underline;
    }

    &.flat-button_palette_prm:hover {
      color: $prm;

      .icon__geometry {
        fill: $prm;
      }
    }

    &.flat-button_palette_aux:hover {
      color: $aux;

      .icon__geometry {
        fill: $aux;
      }
    }

    .flat-button:active .flat-button__label {
      text-decoration: none;
    }
  }
</style>

<script>
  export default {
    props: {
      palette: { type: String, default: 'aux', validator: x => ['aux', 'prm'].includes(x) },
    },
  }
</script>
