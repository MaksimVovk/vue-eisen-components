<template>
  <div
    v-hoisted
    v-scroll-outside="close"
    :style="style"
    class="popover"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      width: { type: String, default: undefined },
      height: { type: String, default: undefined },

      left: { type: String, default: undefined },
      top: { type: String, default: undefined },

      right: { type: String, default: undefined },
      bottom: { type: String, default: undefined },

      centered: { type: Boolean, default: false },

      reference: { // following props are related to this one
        type: [HTMLElement, Object, String, Function],
        default: undefined,
      },

      position: { // position regarding reference element
        type: String,
        default: 'top',
        validator: v => [
          'top', // top of popover === top of reference
          'top:bottom', // top of popover === bottom of reference
          'bottom:top', // top of popover === bottom of reference
          'bottom', // bottom of popover === bottom of reference
          'left', // left of popover === left of reference
          'right', // rigth of popover === rigth of reference
        ].includes(v),
      },

      alignment: { // alignment regarding reference element
        type: String,
        default: undefined,
        validator: v => [
          undefined,
          'left', // left of popover === left of reference 
          'right', // right of popover === right of reference
        ].includes(v),
      },

      margin: { // margin between popover and reference (currently in vertical dimension)
        type: [String, Number],
        default: 0,
        validator: v => !isNaN(parseFloat(v)),
      },
    },
    data () {
      return {
        style: { },
      }
    },
    beforeMount () {
      this.setStyle()
    },
    mounted () {
      this.setStyle()
    },
    methods: {
      close (e) {
        if (e.target.className == 'resize-sensor-shrink' || e.target.className == 'resize-sensor-expand') {
          this.$emit('close', { event: 'resize' })
        } else {
          this.$emit('close', { event: 'scroll' })
        }
      },
      getReferenceElement () {
        if (this.reference == null) {
          return
        }

        if (this.reference instanceof HTMLElement) {
          return this.reference
        }

        if (typeof this.reference === 'string') {
          if (this.reference === 'parent' && this.$parent) {
            return this.$parent.$el
          }
        }

        if (typeof this.reference === 'function') {
          try {
            return this.reference()
          } catch (e) {
            if (process.env.NODE_ENV === 'development') {
              console.log('Popover: failed to get reference due to', e) // eslint-disable-line no-console
            }
          }
        }

        return this.reference.$el
      },
      getStyle () {
        let width = this.width
        let height = this.height

        let left = this.left
        let top = this.top
        let bottom = this.bottom
        let right = this.right

        let position = this.position
        let alignment = this.alignment

        const minimumDistanceToBottom = 20
        const minimumHeightOfPopover = 150

        const reference = this.getReferenceElement()

        if (reference) {
          const rect = reference.getBoundingClientRect()

          if (this.$el && this.position && !this.alignment) {
            const isRight = this.$el.offsetWidth > window.innerWidth - rect.left && rect.right > this.$el.offsetWidth
            alignment =  isRight ? 'right' : 'left'
            if (!width) {
              width = this.$el.offsetWidth > rect.width ? this.$el.offsetWidth : rect.width
            }
          } else {
            alignment = this.alignment
          }

          if (alignment === 'left') {
            left = rect.left + 'px'
          } else {
            right = window.innerWidth - rect.right + 'px'
          }

          if (window.innerHeight - rect.bottom < minimumHeightOfPopover) {
            switch (position) {
              case 'top': position = 'bottom'
                break
              case 'top:bottom': position = 'bottom:top'
                break
              case 'bottom:top': position = 'top:bottom'
                break
              case 'bottom': position = 'top'
                break
              case 'left': position = 'left'
                break
              case 'right': position = 'right'
                break
            }
          }

          const parentHeight = this.$parent.$el ? this.$parent.$el.offsetHeight : 0

          switch (position) {
            case 'top':
              top = rect.top + parseFloat(this.margin) + 'px'
              height = !height ? window.innerHeight - rect.top - minimumDistanceToBottom + 'px' : height + 'px'
              break
            case 'top:bottom':
              top = rect.bottom + parseFloat(this.margin) + 'px'
              height = !height ? window.innerHeight - rect.top - minimumDistanceToBottom - parentHeight + 'px' : height + 'px'
              break
            case 'bottom:top':
              bottom = window.innerHeight - rect.bottom - parseFloat(this.margin) + parentHeight + 'px'
              height = !height ? rect.bottom - minimumDistanceToBottom + 'px' : height + 'px'
              break
            case 'bottom':
              bottom = window.innerHeight - rect.bottom - parseFloat(this.margin) + 'px'
              height = !height ? rect.bottom - minimumDistanceToBottom + 'px' : height + 'px'
              break
            case 'left':
              bottom = window.innerHeight - rect.bottom - parseFloat(this.margin) + 'px'
              left = parseInt(left, 10) - (this.$el ? this.$el.offsetWidth : 0) + 'px'
              height = !height ? rect.bottom - minimumDistanceToBottom + 'px' : height + 'px'
              break
            case 'right':
              bottom = window.innerHeight - rect.bottom - parseFloat(this.margin) + 'px'
              left = parseInt(left, 10) + rect.width + 'px'
              height = !height ? rect.bottom - minimumDistanceToBottom + 'px' : height + 'px'
              break
          }
        }

        return {
          'max-width': width + 'px',
          'width': width + 'px',
          'max-height': height,
          'height': this.height,

          left: this.centered ? '50%' : left,
          top: this.centered ? '50%' : top,

          transform: this.centered ? 'translate(-50%, -50%)' : undefined,

          right: right,
          bottom: bottom,
        }
      },
      setStyle () {
        this.style = this.getStyle()
      },
    },
  }
</script>

<style lang="scss">
  @import '../../../styles/params';

  .popover {
    position: absolute;
    transition-duration: .2s;

    border-radius: $border-radius;
    overflow: hidden;

    background-color: $foreground-color;
    box-shadow: $popover-shadow;

    z-index: 999;
  }
</style>
