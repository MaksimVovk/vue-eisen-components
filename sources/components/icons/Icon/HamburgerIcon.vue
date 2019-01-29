<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      d="M0,7V6H12V7ZM0,3H12V4H0ZM0,0H12V1H0Z"
    />
    <path
      class="icon__geometry"
      d="M0,10V9H12v1Z"
    />
    <path
      class="icon__geometry"
      d="M0,10V9H12v1Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 12, height: 10 })],
  }
</script>
