<template functional>
  <div class="example-block">
    <div
      class="example-block__title"
    >
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
  .example-block {
    font-family: 'Source Sans Pro', sans-serif;

    border-top: 1px solid;
    border-color: rgba(0, 0, 0, 0.1);

    &:not(:first-child) {
      margin-top: 25px;
    }

    &__title {
      display: flex;
      align-items: center;

      padding-top: 30px;
      margin-bottom: 25px;

      font-size: 20px;

      &::before {
        counter-increment: block;
        content: counter(block);

        display: inline-block;
        text-align: center;
        vertical-align: middle;

        width: 40px;
        height: 40px;

        border-radius: 50%;

        padding-top: 10px;
        margin-right: 20px;
        box-sizing: border-box;

        background: #4c84ff;
        color: #fff;
      }
    }
  }
</style>