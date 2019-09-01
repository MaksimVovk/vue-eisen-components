<template>
  <div class="upload-screen">
    <label
      for="upload-file"
      class="upload-screen__area"
      @drop.prevent="uploadFiles"
      @dragover.prevent
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <UploadIcon
        :width="300"
        :height="300"
        focused
      />
      <div
        :class="['upload-screen__border-top', {
          'upload-screen__border-top_hover': isHover
        }]"
      />
      <div
        :class="['upload-screen__border-right', {
          'upload-screen__border-right_hover': isHover
        }]"
      />
      <div
        :class="['upload-screen__border-bottom', {
          'upload-screen__border-bottom_hover': isHover
        }]"
      />
      <div
        :class="['upload-screen__border-left', {
          'upload-screen__border-left_hover': isHover
        }]"
      />
    </label>
    <input
      id="upload-file"
      type="file"
      class="upload-screen__upload-field"
      @input="uploadFiles"
    >
  </div>
</template>

<script>
  import { UploadIcon } from '../../icons'

  export default {
    components: { UploadIcon },
    data () {
      return {
        isHover: false,
        files: [],
      }
    },
    created: function () {
      window.addEventListener('dragover', this.dropStop)
      window.addEventListener('drop', this.dropStop)
    },
    destroyed: function () {
      window.removeEventListener('dragover', this.dropStop)
      window.removeEventListener('drop', this.dropStop)
    },
    methods: {
      uploadFiles (e) {
        const files = e.target.files || e.dataTransfer.files

        if (!files) {
          return
        }

        ([...files]).forEach(f => {
          this.files.push(f)
        })

        this.upload()
      },
      upload () {
        let formData = new FormData()

        this.files.forEach((f,x) => {
          formData.append('file' + (x+1), f)
        })
        this.$emit('input', this.files)
      },
      dropStop (e) {
        e.preventDefault()
      }
    }
  }
</script>

<style lang="scss">
  .upload-screen {
    @mixin border ($direction) {
      position: absolute;
      #{$direction}: 0;

      @if $direction == right or $direction == left {
        width: 5px;
        height: 100%;

        background-image: linear-gradient(#a0a7af 33%, rgba(255,255,255,0) 0%);
        background-position: right;
        background-size: 10px 20px;
        background-repeat: repeat-y;

        &_hover {
          background-image: linear-gradient(#464646 33%, rgba(255,255,255,0) 0%);
        }

      } @else {
        width: 100%;
        height: 5px;

        background-image: linear-gradient(to right, #a0a7af 33%, rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 20px 10px;
        background-repeat: repeat-x;

        &_hover {
          background-image: linear-gradient(to right, #464646 33%, rgba(255,255,255,0) 0%);
        }
      }

    }

    position: relative;

    &__area {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 20px;
      border-radius: 20px;
      cursor: pointer;

      overflow: hidden;
    }

    &__upload-field {
      opacity: 0;
      height: 0;
      width: 0;
      position: absolute;
      top: 0;
    }

    &:hover {
      .icon.icon_focused {
        .icon__geometry {
          fill: #464646;
        }
      }
    }

    @each $direction in top, right, bottom, left {
      &__border-#{$direction} {
        @include border($direction);
      }
    }
  }
</style>