<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M19.548 6.947v.017h-.017L15.431 11l-.657-.65 3.443-3.386H5v-.929h13.217L14.774 2.65l.657-.65 3.912 3.85.188.185h.017v.018L20 6.5l-.452.447zM10 1H1v11h9V9h1v4H0V0h11v4h-1V1z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 20, height: 13 })],
  }
</script>
