<template>
  <Expander
    vertical
    class="menu"
  >
    <Head
      v-once
      slot="before"
      :title="title"
    />
    <Body />
    <Footer slot="after" />
  </Expander>
</template>

<script>
  import Head from './Head'
  import Body from './Body'
  import Footer from './Footer'

  export default {
    components: { Head, Body, Footer },
    props: {
      title: { type: String, default: 'all simple' },
    }
  }
</script>

<style lang="scss">
  @import 'colors';

  .menu {
    height: 100%;
    width: 200px;
    box-sizing: border-box;

    background-color: $prm-800;
    color: $aux;
  }
</style>