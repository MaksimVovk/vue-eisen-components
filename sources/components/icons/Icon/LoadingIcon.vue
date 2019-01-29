<template>
  <svg
    :width="size"
    :height="size"
    class="icon loading-icon"
    viewBox="25 25 50 50"
  >
    <circle
      :stroke-width="thikness"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke-miterlimit="10" />
  </svg>
</template>

<style lang="scss">
  .loading-icon {
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }

      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }

      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }

    transform-origin: center center;
    animation: rotate 2s linear infinite;

    stroke: #13acac;

    circle {
      animation: dash 1.5s ease-in-out infinite;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
    }
  }
</style>

<script>
  export default {
    props: {
      size: { type: [String, Number], default: 60 },
      thikness: { type: [String, Number], default: 2 },
    },
  }
</script>
