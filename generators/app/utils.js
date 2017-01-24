exports.Hyphen2Camel = function Hyphen2Camel(text) {
  return text.replace(/-([a-zA-Z])/g, (str) => {
    return str.replace(/-/, '').toUpperCase()
  })
}

exports.Camel2Pascal = function Camel2Pascal(text) {
  return text.replace(
    /^[a-zA-Z]/,
    letter => letter.toUpperCase()
  )
}
