<template>
  <div class="example">
    <Block
      flex="1"
      class="example-container"
    >
      <div class="example-title">
        {{ title }}
      </div>
      <div class="example-description">
        {{ description }}
      </div>
      <slot />
    </Block>
    <!-- <Block
      width="250"
      class="example-tools"
    >
      Tools
    </Block> -->
  </div>
</template>

<script>
  import Container from '../../misc/Container'
  import Block from '../../misc/Block'

  export default {
    components: { Container, Block },
    props: {
      title: { type: String },
      description: { type: String },
    }
  }
</script>

<style lang="scss">
  .example {
    display: flex;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;

    &-title {
      font-size: 50px;
      font-weight: 100;
    }

    &-description {
      font-size: 20px;
      font-weight: 400;
    }

    &-container {
      flex: 1;
      margin-right: 10px;
    }

    &-description {
      flex: 0;
    }

    &-tools {
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
    }

  }
</style>