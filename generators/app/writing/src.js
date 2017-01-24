module.exports = function copySrc() {
  this.fs.copyTpl(
    this.templatePath('_src/_index.ts'),
    this.destinationPath('src/index.ts'),
    this.props
  )
}
