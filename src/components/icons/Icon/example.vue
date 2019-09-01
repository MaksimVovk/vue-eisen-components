<template>
  <Example
    title="Icon"
    description="Иконка. Меняет цвет в состоянии focused(или при ховере на иконке). За цвет отвечает свойство palette."
  >
    <ExampleBlock
      title="Таблица иконок"
    >
      <div class="icon-example__table">
        <div style="grid-row-end: span 2">
          №
        </div>
        <div style="grid-row-end: span 2; justify-self: normal;">
          Name
        </div>
        <div
          style="grid-row-end: span 2; text-align: center;"
        >
          Default (any palette and no hover/no focus)
        </div>
        <div
          :style="{ gridColumnEnd: 'span ' + palettes.length }"
        >
          Palette (hover/focused)
        </div>
        <div
          v-for="(p, index) of palettes"
          :key="`${p}-${index}`"
        >
          {{ p }}
        </div>
        <template
          v-for="(icon, index) in icons"
        >
          <div
            :key="`icon-index-${icon}-${index}`"
          >
            {{ index + 1 }}
          </div>
          <div
            :key="`icon-name-${icon}-${index}`"
            style="justify-self: normal;"
            class="name"
          >
            {{ icon }}
          </div>
          <div
            :key="`icon-${icon}-${index}`"
            class="icon"
          >
            <Icon :name="icon" />
          </div>
          <div
            v-for="(p, pi) in palettes"
            :key="`palette-${index}-${pi}`"
            :class="['icon', p]"
          >
            <Icon
              :name="icon"
              :palette="p"
              focused
            />
          </div>
        </template>
      </div>
    </ExampleBlock>
  </Example>
</template>

<style lang="scss">
  .icon-example__table {
    display: grid;
    grid-template-columns: 1fr 2fr repeat(6, 1fr);
    grid-auto-rows: 60px;
    grid-template-rows: 30px 30px;
    grid-gap: 5px;
    align-items: center;
    justify-items: center;
    width: min-content;
    white-space: nowrap;

    .neutral,
    .light {
      background: #000;
    }

    .dark {
      background: #fff;
    }
  }
</style>

<script>
  import Icon from './index'
  import * as iconComponents from './icons'

  const icons = Object
    .keys(iconComponents)
    .filter(k => k.endsWith('Icon'))

  const palettes = ['neutral', 'light', 'dark', 'success', 'danger']

  export default {
    components: { Icon },
    data () {
      return { icons, palettes }
    }
  }
</script>
