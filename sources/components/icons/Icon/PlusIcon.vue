<template>
  <BaseIconTemplate v-bind="options">
    <path 
      class="icon__geometry" 
      d="M9.5,0h1a.5.5,0,0,1,.5.5v19a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V.5A.5.5,0,0,1,9.5,0Z"/>
    <path 
      class="icon__geometry" 
      d="M.5,9h19a.5.5,0,0,1,.5.5v1a.5.5,0,0,1-.5.5H.5a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,.5,9Z"/>
  </BaseIconTemplate>
</template>

<script>
  import iconMixin from './icon-mixin'

  export default {
    mixins: [iconMixin({ size: 20 })],
  }
</script>
