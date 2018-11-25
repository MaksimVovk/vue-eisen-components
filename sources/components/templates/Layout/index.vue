<template>
  <div class="layout">
    <slot name="menu"></slot>
    <div class="layout__viewport">
      <div class="layout__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .layout {
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    &__viewport {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      min-height: fit-content;

      box-sizing: border-box;
      overflow: hidden;
    }
  }
</style>
