<template>
  <BaseIconTemplate v-bind="options">
    <path
      class="icon__geometry"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.5 15C3.358 15 0 11.642 0 7.5C0 3.358 3.358 0 7.5 0C11.642 0 15 3.358 15 7.5C15 11.642 11.642 15 7.5 15ZM7.5 1C3.91 1 1 3.91 1 7.5C1 11.09 3.91 14 7.5 14C11.09 14 14 11.09 14 7.5C14 3.91 11.09 1 7.5 1ZM10.246 10.91C9.414 10.374 8.46 10.067 7.443 10.067C6.482 10.067 5.579 10.344 4.781 10.83C4.711 10.872 4.574 10.962 4.574 10.962L4.01 10.103C4.01 10.103 4.098 10.042 4.142 10.013C5.119 9.369 6.244 9 7.443 9C8.687 9 9.851 9.396 10.852 10.085C10.909 10.124 11.021 10.205 11.021 10.205L10.418 11.025C10.418 11.025 10.304 10.948 10.246 10.91ZM9 5H10V6H9V5ZM5 5H6V6H5V5Z"
    />
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 15 })],
  }
</script>
