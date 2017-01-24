const copyVscodeSetting = require('./vscode')
const copyConfig = require('./config')
const copyTravis = require('./travis')
const copyServer = require('./server')
const copySrc = require('./src')
const copyBase = require('./base')
const copyPackage = require('./package')

module.exports = function writing(self) {
  copyVscodeSetting.bind(self)()
  copyConfig.bind(self)()
  copyTravis.bind(self)()
  copyServer.bind(self)()
  copySrc.bind(self)()
  copyBase.bind(self)()
  copyPackage.bind(self)()
}
