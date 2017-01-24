module.exports = function copyConfig() {
  this.fs.copy(
    this.templatePath('_config/_webpack.common.js'),
    this.destinationPath('config/webpack.common.js')
  )
  this.fs.copy(
    this.templatePath('_config/_webpack.dev.js'),
    this.destinationPath('config/webpack.dev.js')
  )
  this.fs.copy(
    this.templatePath('_config/_webpack.prod.js'),
    this.destinationPath('config/webpack.prod.js')
  )
}
