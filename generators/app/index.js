const path = require('path')
const Generator = require('yeoman-generator')
const yosay = require('yosay')
const chalk = require('chalk')

const utils = require('./utils')
const writing = require('./writing')

module.exports = class extends Generator {

  initializing() {
    this.props = {
      appname: '',
      modulename: ''
    }

    this.argument('appname', {
      type: String,
      required: false
    })

    this.argument('modulename', {
      type: String,
      required: false
    })

    this.props.appname = this.appname || path.basename(process.cwd())
    this.props.modulename = this.modulename || utils.Camel2Pascal(
      utils.Hyphen2Camel(this.props.appname)
    )
  }

  prompting() {
    this.log(
      yosay('Welcome to the ' + chalk.green(this.props.appname) + ' generator!')
    )
  }

  default() {

  }

  writing() {
    writing(this)
  }

  install() {
    this.on('dependenciesInstalled', () => {
      this.log(
        chalk.green('node dependencies are installed')
      )
    })

    this.installDependencies({
      bower: false,
      callback: () => {
        this.emit('dependenciesInstalled')
      }
    })
  }
}
