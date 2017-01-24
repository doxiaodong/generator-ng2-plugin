const path = require('path')
const Generator = require('yeoman-generator')
const askName = require('inquirer-npm-name')
const yosay = require('yosay')
const chalk = require('chalk')
const _ = require('lodash')

const utils = require('./utils')
const promptingArray = require('./prompts')
const writing = require('./writing')

module.exports = class extends Generator {

  initializing() {
    this.props = {
      appname: '',
      modulename: ''
    }

    this.props.appname = this.appname || path.basename(process.cwd())
    this.props.appname = _.kebabCase(this.props.appname)
    this.props.modulename = this.modulename || utils.Camel2Pascal(
      utils.Hyphen2Camel(
        this.props.appname
      )
    )
  }

  prompting() {
    this.log(
      yosay('Welcome to the ' + chalk.green(this.props.appname) + ' generator!')
    )
  }

  default() {

  }

  ask(prompts = promptingArray) {
    const prompt = prompts[0]
    return askName({
      name: prompt.name,
      message: prompt.message,
      default: prompt.default || this.props[prompt.name]
    }, this).then(props => {
      this.props[prompt.name] = props[prompt.name]
      if (prompts.length > 1) {
        return this.ask(prompts.slice(1))
      }
    })
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
