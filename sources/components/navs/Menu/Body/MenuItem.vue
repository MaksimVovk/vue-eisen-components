<template>
  <router-link :to="item.path" class="menu__body-item">
    <MenuIcon :name="item.icon"/>
    <span class="menu__body-item-label">{{ item.label }}</span>
  </router-link>
</template>

<script>
  import MenuIcon from './MenuIcon'

  export default {
    components: { MenuIcon },
    props: {
      item: { type: Object, required: true },
    }
  }
</script>

<style lang="scss">
  @import 'colors';

  .menu__body-item {
    display: flex;
    align-items: center;

    min-height: 40px;
    width: 100%;

    border-top: 1px solid $prm-700;

    padding: 5px 10px;
    box-sizing: border-box;

    text-decoration: none;

    &-label {
      font-size: 16px;
      color: $aux;
    }
  }
</style>