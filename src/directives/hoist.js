export default {
  inserted (el) {
    el.remove()
    document.body.appendChild(el)
  },
  unbind (el) {
    el.remove()
  },
}
