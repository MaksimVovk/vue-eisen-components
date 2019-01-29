<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M17.325 6L12 11.551V20h-2v-.093l-.026.011L6.108 16H6v-4.449L.674 6H0V0h18v6h-.675zM8 14.185l2 2.477V12H8v2.185zM7.272 10h3.456l3.837-4H3.435l3.837 4zM16 2H2v2h14V2z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 18, height: 20 })],
  }
</script>
