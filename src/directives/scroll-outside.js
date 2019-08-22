export default {
  bind(el, { value }) {
    el._handler = e => {
      if (!el.contains(e.target)) {
        value(e)
      }
    }
    document.addEventListener('scroll', el._handler, { capture: true })
  },

  unbind(el) {
    document.removeEventListener('scroll', el._handler, { capture: true })
  },
}
