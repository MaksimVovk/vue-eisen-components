<template>
  <div
    :is="$props.tagname"
    class="scrollbox"
    @ps-scroll-y="scrollHandle"
    @ps-scroll-x="scrollHandle"
    @ps-scroll-up="scrollHandle"
    @ps-scroll-down="scrollHandle"
    @ps-scroll-left="scrollHandle"
    @ps-scroll-right="scrollHandle"
    @ps-y-reach-start="scrollHandle"
    @ps-y-reach-end="scrollHandle"
    @ps-x-reach-start="scrollHandle"
    @ps-x-reach-end="scrollHandle"
  >
    <slot />
  </div>
</template>

<style lang="scss">
  @import '~perfect-scrollbar/css/perfect-scrollbar.css';

  .scrollbox {
    position: relative;

    &:hover {
      .ps__rail-x,
      .ps__rail-y {
        opacity: 1;
      }
    }

    .ps__rail-x {
      height: 6px;
      margin-right: 8px;
      bottom: 3px;

      border-radius: 15px;
      background-color: rgba(105,105,105,.3);

      .ps__thumb-x {
        border-radius: 15px;
        bottom: 0;
      }

      &:hover {
        background-color: rgba(105,105,105,.3);

        .ps__thumb-x {
          height: 6px;
        }
      }
    }

    .ps__rail-y {
      width: 6px;
      margin-bottom: 8px;
      right: 3px;

      border-radius: 15px;
      background-color: rgba(105,105,105,.3);

      .ps__thumb-y {
        border-radius: 15px;
        right: 0;
      }

      &:hover {
        background-color: rgba(105,105,105,.3);

        .ps__thumb-y {
          width: 6px;
        }
      }
    }

  }
</style>

<script>
  import PerfectScrollbar from 'perfect-scrollbar'

  export default {
    props: {
      switcher: { type: Boolean, default: true },
      tagname: { type: String, default: 'div' }
    },
    data() {
      return {
        ps: null,
        defaultSetting: { }
      }
    },
    watch: {
      switcher (val) {
        if (val && !this._ps_inited) {
          this.bindScroll ()
        }
        if (!val && this._ps_inited) {
          this.unbindScroll()
        }
      },
    },
    mounted () {
      if (!this.$isServer) {
        this.bindScroll ()
      }
    },
    updated () {
      this.$nextTick(this.update)
    },
    activated () {
      this.bindScroll ()
    },
    deactivated () {
      this.unbindScroll()
    },
    beforeDestroy () {
      this.unbindScroll()
    },
    methods: {
      scrollHandle (evt) {
        this.$emit(evt.type, evt)
      },
      update () {
        if (this.ps) {
          this.ps.update()
        }
      },
      bindScroll () {
        if (this.switcher) {
          if (!this._ps_inited) {
            this._ps_inited = true
            this.ps = new PerfectScrollbar(this.$el, this.defaultSetting)
          } else {
            this.ps.update()
          }
        }
      },
      unbindScroll () {
        if (this.ps) {
          this.ps.destroy()
          this.ps = null
          this._ps_inited = false
        }
      }
    },
  }
</script>