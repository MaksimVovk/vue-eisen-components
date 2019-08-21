export default function builder () {
  const sizes = ['small', 'big']
  const palettes = ['primary', 'success', 'warning', 'danger', 'info']

  return {
    props: {
      size: { type: String, default: 'big', validator: value => sizes.includes(value) },
      palette: { type: String, default: 'primary', validator: value => palettes.includes(value) },
      disabled: { type: Boolean, default: false },
    },
  }
}
