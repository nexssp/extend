exports.JSONparse = function JSONparse(str) {
  return JSON.parse(str, function (k, v) {
    if (
      typeof v === 'string' &&
      (v.startsWith('function (') ||
        v.startsWith('function(') ||
        v.includes('() {') ||
        v.includes('(){') ||
        (v.trim().startsWith('(') && v.trim().endsWith('}'))) &&
      v.endsWith('}')
    ) {
      return eval('(' + v + ')')
    }
    return v
  })
}

exports.JSONstringify = function JSONstringify(str, ...args) {
  return JSON.stringify(str, (k, v) => (typeof v === 'function' ? '' + v : v), ...args)
}
