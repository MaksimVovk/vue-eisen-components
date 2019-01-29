<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      d="M0,3H12V4H0Z"
    />
    <path
      class="icon__geometry"
      d="M0,3.33,3.33,0,4,.67.67,4Z"
    />
    <path
      class="icon__geometry"
      d="M0,3.67,3.33,7,4,6.33.67,3Z"
    />
    <path
      class="icon__geometry"
      d="M12,9H0v1H12Z"
    />
    <path
      class="icon__geometry"
      d="M12,9.33,8.67,6,8,6.67,11.33,10Z"
    />
    <path
      class="icon__geometry"
      d="M12,9.67,8.67,13,8,12.33,11.33,9Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 12, height: 13 })],
  }
</script>
