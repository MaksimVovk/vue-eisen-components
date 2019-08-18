<template>
  <div class="app-layout">
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
    }
    &__body {
      flex: 1;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      display: flex;
      background-color: #d5d8da;
    }
  }
</style>

<script>
  export default {
    props: {
      pages: { type: Array, required: true },
    },
  }
</script>