<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M19.654 18.429a.94.94 0 0 1 0 1.297.863.863 0 0 1-.633.274.887.887 0 0 1-.633-.274l-5.391-5.485A7.954 7.954 0 0 1 8 16a8 8 0 1 1 6.148-2.884l.156-.144 5.35 5.457zM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 20 })],
  }
</script>
