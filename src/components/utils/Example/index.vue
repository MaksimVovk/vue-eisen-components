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
        <div class="description__title">
          Description
        </div>
        <div class="description__text">
          {{ description }}
        </div>
      </div>
      <slot />
    </Block>
  </div>
  <!-- <Block
      width="250"
      class="example-tools"
    >
      Tools
    </Block> -->
</template>

<script>
  import Block from '../../misc/Block'

  export default {
    components: { Block },
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
      margin-top: 15px;
      margin-bottom: 30px;

      .description__title {
        font-size: 20px;
        font-weight: 400;
      }

      .description__text {
        font-weight: 400;
        line-height: 1.2;

        margin-top: 10px;

        color: #777;
      }
    }

    &-container {
      width: 100%;
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