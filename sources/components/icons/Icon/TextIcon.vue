<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M-0.000,7.000 L-0.000,6.000 L12.000,6.000 L12.000,7.000 L-0.000,7.000 ZM-0.000,4.000 L12.000,4.000 L12.000,5.000 L-0.000,5.000 L-0.000,4.000 ZM-0.000,2.000 L-0.000,1.000 L-0.000,-0.000 L12.000,-0.000 L12.000,1.000 L12.000,2.000 L12.000,3.000 L-0.000,3.000 L-0.000,2.000 ZM1.000,2.000 L11.000,2.000 L11.000,1.000 L1.000,1.000 L1.000,2.000 ZM6.999,9.000 L-0.000,9.000 L-0.000,8.000 L6.999,8.000 L6.999,9.000 Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 12, height: 9 })],
  }
</script>
