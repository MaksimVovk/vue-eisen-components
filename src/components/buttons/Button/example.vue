<template>
  <Example
    title="Button"
    description="Компонент Button. Самая простая кнопка, имеет параметры size(big, small), palette(success, danger, warning, info, primary), disabled."
  >
    <template v-for="c in contexts">
      <ExampleBlock
        :key="`key-button-${c.id}`"
        :title="c.title"
      >
        <Button
          :size="size"
          :palette="palette"
          :disabled="c.disabled"
          @click="testClick"
        >
          Example
        </Button>
      </ExampleBlock>
    </template>
  </Example>
</template>

<script>
  import Button from './index'

  export default {
    components: { Button },
    data () {
      return {
        size: 'big',
        palette: 'primary',
        contexts: [
          { id: 1, title: 'Simple big button' },
          { id: 2, title: 'Simple small button' },
          { id: 3, title: 'Simple disabled button', disabled: true },
        ]
      }
    },
    methods: {
      testClick () {
        alert('It`s work')
      }
    }
  }
</script>