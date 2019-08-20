<template>
  <div :class="['field', `field_palette_${palette}`, {
    'field_filled': filled,
    'field_focused': focused,
    'field_disabled': disabled,
    'field_readonly': readonly,
    [`field_size_${size}`]: size != null,
  }]">
    <slot />
  </div>
</template>

<script>
  import { appearanceMixin } from '../../../mixins'

  export default {
    mixins: [appearanceMixin()],
    props: {
      filled: { type: Boolean, default: false },
      focused: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
    }
  }
</script>