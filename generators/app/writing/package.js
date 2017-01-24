module.exports = function copyPackage() {
  this.fs.copyTpl(
    this.templatePath('_package.json'),
    this.destinationPath('package.json'),
    this.props
  )
}
