// Removes element based on value
exports.remove = function remove(array, item) {
  var index = array.indexOf(item)
  if (index !== -1) array.splice(index, 1)
  return array
}

// Flatten the array eg [1,[2,5]] = [1,2,5]
exports.flat = function flat(array, depth = 1) {
  return array.reduce(function (result, toFlatten) {
    return result.concat(
      Array.isArray(toFlatten) && depth > 1 ? toFlatten.flat(depth - 1) : toFlatten
    )
  }, [])
}

exports.arrArgStripQuotes = function argStripQuotes(array) {
  return array.map(
    (el) =>
      (!el.startsWith('{') &&
        !el.endsWith('{') &&
        el.replace &&
        el.replace(/"([^"]+(?="))"/g, '$1').replace(/'([^']+(?='))'/g, '$1')) ||
      el
  )
}

exports.arrArgvAddQuotes = function argvAddQuotes(array, surround = '"') {
  let replace = "'"
  if (process.platform !== 'win32') {
    surround = "'"
    replace = '"'
  }

  return array.map((a) => {
    a = a.replace(
      new RegExp(`=(?:("|')?)(.*[^(?:("|')])(?:("|')?)$`),
      `=${!a.startsWith(surround) ? surround : ''}$2${!a.endsWith(surround) ? surround : ''}`
    )
    if (
      /^(?!("|')).*[<>]/.test(a) ||
      (!a.startsWith('-') && !a.endsWith('"') && !/^\S+$/.test(a))
    ) {
      a = `${!a.startsWith('"') && !a.startsWith("'") ? surround : ''}${a}${
        !a.endsWith(surround) ? surround : ''
      }`
    }
    return a
  })
}

exports.filterArray = function filterArray(array, filterArray) {
  return array.filter(function (e) {
    return this.indexOf(e) < 0
  }, filterArray)
}
