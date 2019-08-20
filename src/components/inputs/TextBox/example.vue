<template>
  <Example
    title="TextBox"
    description="Компонент TextBox."
  >
    <ExampleBlock
      :title="title"
    >
      <TextBox v-model="value" />
    </ExampleBlock>
  </Example>
</template>

<script>
  import TextBox from './index'

  export default {
    components: { TextBox },
    data () {
      return {
        value: null,
        title: 'Simple text field'
      }
    }
  }
</script>