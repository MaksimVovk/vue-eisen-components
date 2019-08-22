<template>
  <Example
    title="Tabs"
    description="Компонент навигации по редактору. Принимает одиночное значение (строку или число), являющемся активным табом. Также принимает список табов."
  >
    <ExampleBlock title="single state">
      <Tabs
        v-model="value"
        :options="tabs"
      />
    </ExampleBlock>
  </Example>
</template>

<script>
  import Tabs from './index'

  export default {
    components: { Tabs },

    data () {
      return {
        value: 'Tab1',
        tabs: [
          { id: 'Tab1', name: 'Tab 1' },
          { id: 'Tab2', name: 'Tab 2' },
          { id: 'Tab3', name: 'Tab 3' },
          { id: 'Tab4', name: 'Tab 4' },
        ],
      }
    },
  }
</script>
