<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M7 5.437L6.36 6 3 3l3.36-3L7 .562 4.28 3 7 5.437zm-3 0L3.36 6 0 3l3.36-3L4 .562 1.28 3 4 5.437z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 7, height: 6 })],
  }
</script>
