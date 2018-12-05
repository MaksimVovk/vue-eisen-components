export default class Storage {
  static get(key) {
    const value = localStorage.getItem(key)
    return value === null ? null : JSON.parse(value)
  }

  static set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  }
}
