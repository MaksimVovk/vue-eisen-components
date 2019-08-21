<template>
  <Field
    :filled="isFilled"
    :disabled="disabled"
    :palette="palette"
    :focused="isMouseOver || isFocused"
    class="text-box"
    @mouseenter="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <input
      ref="input"
      :value="value"
      :disabled="disabled"
      :type="type"
      class="text-box__input"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('enter')"
      @keyup.esc="$emit('esc')"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
  </Field>
</template>

<script>
  import { appearanceMixin } from '../../../mixins'
  import { Field } from '../../appearance'

  const types = ['text', 'password']

  export default {
    components: { Field },
    mixins: [appearanceMixin()],
    props: {
      value: { type: [String, Number], default: null },
      focused: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
      type: { type: String, default: 'text', validator: value => types.includes(value) }
    },
    data () {
      return {
        isMouseOver: false,
        isFocused: false,
      }
    },
    computed: {
      isFilled () {
        return this.value && this.value.length > 0 || this.error
      },
    },
    mounted () {
      if (this.focused) {
        this.$refs.input.focus()
      }
    },
  }
</script>

<style lang="scss">
  .text-box {
    &__input {
      background-color: transparent;
    }
  }
</style>