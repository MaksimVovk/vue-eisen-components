export default function builder (params = { }) {
  return {
    props: {
      focused: { type: Boolean },
      disabled: { type: Boolean },
      palette: { type: String, default: 'light', validator: x => ['neutral', 'light', 'dark', 'success', 'danger'].includes(x) },
      width: { type: [Number, String], default: params.width },
      height: { type: [Number, String], default: params.height },
      size: { type: [Number, String], default: params.size },
    },
    computed: {
      options () {
        return {
          focused: this.focused,
          disabled: this.disabled,
          palette: this.palette,
          width: this.width || this.size,
          height: this.height || this.size,
          viewBox: params.width && params.height || params.size
            ? `0 0 ${params.width || params.size} ${params.height || params.size}`
            : undefined,
          clickListener: this.$listeners.click,
        }
      },
    }
  }
}
