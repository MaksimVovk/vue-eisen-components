<template>
  <table class="icon-example">
    <thead>
      <tr>
        <th rowspan="2">№</th>
        <th rowspan="2">Name</th>
        <th rowspan="2">Default (any palette and no hover/no focus)</th>
        <th :colspan="palettes.length">Palette (hover/focused)</th>
      </tr>
      <tr>
        <th
          v-for="p of palettes"
          :key="p">{{ p }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in icons"
        :key="item"
      >
        <td>{{ index + 1 }}</td>
        <td class="name">{{ item }}</td>
        <td class="icon"><Icon :name="item" /></td>
        <td
          v-for="p of palettes"
          :key="p"
          :class="['icon', p]">
          <Icon
            :name="item"
            :palette="p"
            focused
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
  .icon-example {
    background-color: #fff;
    margin: 10px;
    padding: 10px;

    th,
    .icon {
      text-align: center;
    }

    .name {
      padding-left: 10px;
      padding-right: 10px;
    }

    .white,
    .light {
      background: #000;
    }

    .dark {
      background: #fff;
    }
  }
</style>

<script>
  const specialIcons = ['Icon', 'BaseIconTemplate', 'index', 'example']

  const context = require.context('./', true, /\.vue$/)
  const icons = context.keys().map(k => getName(k, 1).replace(/\.vue$/, '')).filter(i => !specialIcons.includes(i))
  const palettes = ['white', 'light', 'dark', 'success', 'danger']

  function getName (path, index = 1) {
    const parts = path.split('./')
    return parts[parts.length - index]
  }
  export default {
    data () {
      return { icons, palettes }
    }
  }
</script>
