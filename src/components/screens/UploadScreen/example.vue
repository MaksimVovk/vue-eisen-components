<template>
  <Example
    title="UploadScreen"
    description="Компонент UploadScreen."
    class="upload-screen-example"
  >
    <ExampleBlock title="Simple">
      <UploadScreen @input="upload" />
      <div class="upload-screen-example__upload-list">
        <div
          v-for="f of files"
          :key="`file-${f.id}-${f.size}`"
          class="upload-screen-example__row"
        >
          <div class="upload-screen-example__column">
            {{ f.id }}
          </div>
          <div class="upload-screen-example__column">
            {{ f.name }}
          </div>
          <div class="upload-screen-example__column">
            {{ f.size }}
          </div>
        </div>
      </div>
    </ExampleBlock>
  </Example>
</template>

<script>
  import UploadScreen from './index'

  export default {
    components: { UploadScreen },
    data () {
      return {
        files: null
      }
    },
    methods: {
      upload (e) {
        this.files = e.map((f, fi) => ({ id: fi + 1, name: f.name, size: f.size }))
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/palettes';

  .upload-screen-example {
    &__upload-list {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding: 20px;
      box-sizing: border-box;

      font-size: 20px;
      font-weight: 100;
    }

    &__row {
      display: grid;
      align-items: center;
      grid-template-columns: 40px 1fr 1fr;
      grid-gap: 10px;

      width: 100%;
      height: 40px;

      @each $name, $color in $aux {
        &:hover {
          background-color: $color;
        }
      }
    }

    &__column:first-child {
      text-align: center;
    }
  }
</style>