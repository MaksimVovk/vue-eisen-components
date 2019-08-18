module.exports = {
  configureWebpack: config => {
    config.entry.app = `${__dirname}/showcase/index.js`
    config.devServer = { contentBase: `${__dirname}/showcase/public` }
  },
}