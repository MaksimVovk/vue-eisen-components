<template>
  <div class="text-box">
    <input type="text">
  </div>
</template>

<script>
  export default {
    props: {
      value: { type: [String, Number], default: null },
    }
  }
</script>

<style lang="scss">
  .text-box {
    
  }
</style>