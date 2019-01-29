<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      d="M13.451 1.649l-6.795 9.15a.5.5 0 0 1-.699.112l-.81-.586c-.153-.111-.19-.289-.167-.465L.318 4.712c-.165-.227-.11-.56.123-.745l.844-.67c.233-.184.555-.151.721.075l4.216 4.657L11.831.476a.5.5 0 0 1 .698-.112l.81.586a.5.5 0 0 1 .112.699z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ width: 14, height: 11 })],
  }
</script>
