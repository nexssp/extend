exports.addTimestamp = function addTimestamp(str) {
  const timestamp = new Date().toJSON().replace(/:/g, '.')
  if (str.indexOf('.') > -1) {
    const splitted = str.split('.')
    const filenameWoutExtension = splitted.slice(0, -1).join('.')
    const extension = splitted.pop()
    return `${filenameWoutExtension}_${timestamp}${extension ? '.' + extension : ''}`
  } else {
    return `${str}_${timestamp}`
  }
}

exports.trimExtension = function trimExtension(str) {
  return str.split('.').slice(0, -1).join('.')
}

// Works like template!! interpolate("my ${somevar}",{somevar:1234})
exports.interpolate = function interpolate(str, params) {
  const names = Object.keys(params)
  const vals = Object.values(params)
  return new Function(...names, `return \`${str}\`;`)(...vals)
}

exports.template = exports.interpolate

exports.similarity = function similarity(str, b) {
  var equivalency = 0
  var minLength = str.length > b.length ? b.length : str.length
  var maxLength = str.length < b.length ? b.length : str.length
  for (var i = 0; i < minLength; i++) {
    if (str[i] == b[i]) {
      equivalency++
    }
  }

  var weight = equivalency / maxLength
  return weight * 100
}

exports.pad = function pad(str, length, char = ' ') {
  return str.padStart((str.length + length) / 2, char).padEnd(length, char)
}

exports.camelCase = function camelCase(str) {
  var result = str.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1)
}

exports.stripEndQuotes = function stripEndQuotes(str) {
  return str.replace(/(^["|'])|(["|']$)/g, '')
}

exports.stripTerminalColors = function (str) {
  return str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ''
  )
}

// const url = require("url"); url.parse is depracated
exports.parseURL = function (str, ...args) {
  let parsed
  try {
    parsed = new URL(str, ...args)
  } catch (e) {
    parsed = {}
    parsed.pathname = str + ''
    parsed.path = str + ''
    parsed.href = str + ''
  }
  return parsed
}
