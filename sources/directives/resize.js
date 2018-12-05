export default {
  bind (el, binding) {
    window.addEventListener('resize', binding.value)
  },
  unbind (el, binding) {
    window.removeEventListener('resize', binding.value)
  },
}
