<template>
  <div :class="['app-layout', `app-layout_theme-${theme}`]">
    <div
      v-if="pages && pages.length"
      class="app-layout__nav"
    >
      <router-link
        v-for="(page, index) in pages"
        :key="`page-${page.label}-${index}`"
        :to="page.path"
      >
        {{ page.label }}
        <router-link
          v-for="(p, i) in page.children"
          :key="`p-${p.label}-${i}`"
          :to="p.path"
        >
          {{ p.label }}
        </router-link>
      </router-link>
      <div
        class="logut"
        @click="$emit('logout')"
      >
        LOGUT
      </div>
    </div>
    <div class="app-layout__body">
      <slot>
        <router-view />
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
  .app-layout {
    display: flex;
    width: 100%;
    height: 100%;

    &__nav {
      flex: 0;
      width: 250px;
      background-color: #212a39;
    }

    &__body {
      display: flex;
      flex: 1;

      height: 100%;
      position: relative;

      min-width: 0;
      min-height: 0;

      padding: 20px;
      box-sizing: border-box;

      overflow: hidden;
    }

    &_theme-light {
      background-color: #f5f6fa;
    }

    &_theme-dark {
      background-color: #fff;
    }

    &_theme-neutral {
      background-color: #efefef;
    }
  }
</style>

<script>
  const themes = ['light', 'dark', 'neutral']

  export default {
    props: {
      pages: { type: Array, required: true },
      theme: { type: String, default: 'light', validator: value => themes.includes(value) },
    },
  }
</script>