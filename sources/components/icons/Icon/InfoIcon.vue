<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M9,14h2V9H9ZM10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18ZM9,8h2V6H9Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 20 })],
  }
</script>
