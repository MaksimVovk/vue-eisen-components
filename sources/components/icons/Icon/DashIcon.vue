<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      d="M-4123.36-2071.06h12v1h-12Z"
      transform="translate(4123.36 2071.06)"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 12, height: 1 })],
  }
</script>
