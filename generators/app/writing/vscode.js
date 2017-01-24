module.exports = function copyVscodeSetting() {
  this.fs.copy(
    this.templatePath('_vscode/_settings.json'),
    this.destinationPath('.vscode/settings.json')
  )
}
