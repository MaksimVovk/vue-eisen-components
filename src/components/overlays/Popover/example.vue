<template>
  <Example
    title="Popover"
    description="Статический компонент, отвечает за отображение компонентов поверх остальных."
  >
    <ExampleBlock title="default">
      <Button
        ref="button"
        @click="opened = !opened"
      >
        click me<span v-if="opened">: opened</span>
      </Button>
      <Popover 
        v-if="opened"
        v-click-outside="() => opened = false"
        :reference="$refs.button" 
        width="auto"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Popover>
    </ExampleBlock>
  </Example>
</template>

<script>
  import Popover from './index'
  import Button from '../../buttons/Button'

  export default {
    components: { Popover, Button },
    data () {
      return { opened: false }
    },
  }
</script>