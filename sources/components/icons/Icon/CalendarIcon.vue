<template>
  <BaseIconTemplate v-bind="options">
    <path
      fill-rule="evenodd"
      class="icon__geometry"
      d="M11,13H2a2,2,0,0,1-2-2V3A2,2,0,0,1,2,1H3V0H4V1H6V0H7V1H9V0h1V1h1a2,2,0,0,1,2,2v8A2,2,0,0,1,11,13ZM12,3c-.06-1.17-1-1-1-1H10V3H9V2H7V3H6V2H4V3H3V2H2S1,1.73,1,3v8c0,1.23,1,1,1,1h9s1,.26,1-1ZM9,9h1v1H9ZM9,7h1V8H9ZM9,5h1V6H9ZM6,9H7v1H6ZM6,7H7V8H6ZM6,5H7V6H6ZM3,9H4v1H3ZM3,7H4V8H3ZM3,5H4V6H3Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 13 })],
  }
</script>
