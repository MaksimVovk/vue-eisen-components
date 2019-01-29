<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M4 13H0v-1h4v-2H0V8.999h4V7H0V6h4V4H0v-.999h4v-2H0V0h5v13H4z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 5, height: 13 })],
  }
</script>
