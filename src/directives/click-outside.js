export default {
  bind(el, { value }) {
    el._handler = e => {
      if (!el.contains(e.target)) {
        setTimeout(() => value(e), 1)
      }
    }
    document.addEventListener('click', el._handler, { capture: true })
  },

  unbind(el) {
    document.removeEventListener('click', el._handler, { capture: true })
  },
}
