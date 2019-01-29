<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M13.999 4v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4H-.001V3H4V2a2 2 0 0 1 1.999-2H9a2 2 0 0 1 2 2v1h4v1h-1.001zM10 2a1 1 0 0 0-1-1H5.999a1 1 0 0 0-1 1v1H10V2zm2.999 2H2v11a1 1 0 0 0 1 1h8.999a1 1 0 0 0 1-1V4zM10 6h1v7h-1V6zM7.999 6H9v8H7.999V6zm-2 0H7v8H5.999V6zM4 6h.999v8H4V6z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 15, height: 17 })],
  }
</script>
