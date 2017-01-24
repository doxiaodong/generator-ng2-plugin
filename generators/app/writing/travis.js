module.exports = function copyTravis() {
  this.fs.copy(
    this.templatePath('_scripts/_travis.sh'),
    this.destinationPath('scripts/travis.sh')
  )
  this.fs.copy(
    this.templatePath('_travis.yml'),
    this.destinationPath('travis.yml')
  )
}
