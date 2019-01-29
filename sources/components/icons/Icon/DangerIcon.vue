<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M18.89,16C17,12.49,12.55,4.69,10.68,1.45l.2-.35L10.21.63,9.85,0,9.57.19,9.3,0,8.94.63l-.67.47.2.35C6.59,4.71,2.07,12.58.23,16a1.72,1.72,0,0,0,0,1.67.75.75,0,0,0,.31.49,2.91,2.91,0,0,0,.47.46l.13-.22a3.55,3.55,0,0,0,.7.06H17.54a3.39,3.39,0,0,0,.51,0l.11.2a3.15,3.15,0,0,0,.34-.31.75.75,0,0,0,.51-.79A1.79,1.79,0,0,0,18.89,16Zm-16.68.51L9.57,3.42l7.36,13.07Zm6.36-4h2v-5h-2Zm0,3h2v-2h-2Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 19 })],
  }
</script>
