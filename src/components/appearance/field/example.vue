<template>
  <Example
    title="Field"
    description="Компонент Field."
  >
    <ExampleBlock :title="title">
      <Field v-bind="options">
        <input type="text">
      </Field>
    </ExampleBlock>
  </Example>
</template>

<script>
  import Field from './index'

  export default {
    components: { Field },
    data () {
      return {
        title: 'Simple wrapper for text fields',
        options: {
          size: 'big',
          palette: 'primary',
          disabled: false,
          filled: false,
          focused: false,
          readonly: false,
        }
      }
    },
  }
</script>