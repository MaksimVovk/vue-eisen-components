<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      d="M15.81,4.54C15.64,4.34,12.41,0,8,0S.36,4.34.19,4.54a.67.67,0,0,0,0,.93C.37,5.66,3.61,10,8,10s7.64-4.34,7.81-4.54a.67.67,0,0,0,0-.93ZM8,8.67C4.92,8.67,2.75,6.07,1.56,5,2.75,3.89,4.92,1.3,8,1.3S13.25,3.89,14.44,5C13.25,6.07,11.08,8.67,8,8.67ZM5.73,5A2.34,2.34,0,0,0,8,7.36,2.33,2.33,0,0,0,10.3,5,2.33,2.33,0,0,0,8,2.61,2.34,2.34,0,0,0,5.73,5ZM8,3.93A1.06,1.06,0,0,1,9,5,1,1,0,1,1,8,3.93Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 16, height: 10 })],
  }
</script>
