<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M4,12V8H0V7.31H0V5.69H0V4.31H0V0H8V4h4v8ZM7,1H1V3.31L3.31,1,4,1.69l-3,3V6.31L6.31,1,7,1.69,1.69,7H3.31L7,3.31ZM4.69,7H7V4.69ZM11,5H8V8H5v3h6Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 12 })],
  }
</script>
