<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M4 11.999V8H-.001V0h8v4H12v7.999H4zM6.999 1h-6v6H4V4h2.999V1zm0 3.999H5V7h1.999V4.999zm4.001 0H7.999V8H5v2.999h6v-6z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 12 })],
  }
</script>
