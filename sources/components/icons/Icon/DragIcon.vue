<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      d="M0,0H13V1H0Z"
    />
    <path
      class="icon__geometry"
      d="M0,4H13V5H0Z"
    />
    <path
      class="icon__geometry"
      d="M0,8H13V9H0Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 13, height: 9 })],
  }
</script>
