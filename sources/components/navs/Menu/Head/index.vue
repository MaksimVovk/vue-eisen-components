<template functional>
  <div class="menu__head">
    {{ props.title }}
    <slot name="after" />
  </div>
</template>

<style lang="scss">
  .menu__head {
    height: 50px;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    font-size: 17px;
    font-weight: 700;
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
  }
</style>
