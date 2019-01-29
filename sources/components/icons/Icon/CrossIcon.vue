<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M14.999 14.35l-.649.65L7.5 8.15.65 15l-.651-.65L6.85 7.5-.001.65.65 0 7.5 6.85 14.35 0l.649.65L8.15 7.5l6.849 6.85z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 15 })],
  }
</script>
