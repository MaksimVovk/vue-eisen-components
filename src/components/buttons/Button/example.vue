<template>
  <Example
    title="Button"
    description="Компонент Button. Представлен 4-мя видами, за тип кнопки отвечает атрибут look (default, flat, link, outline)."
  >
    <ExampleBlock>
      <Button />
    </ExampleBlock>
  </Example>
</template>

<script>
  import Button from './index'

  export default {
    components: { Button }
  }
</script>