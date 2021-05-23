exports.YAMLparse = function YAMLparse(str) {
  const { load } = require('js-yaml')
  return load(str)
}

exports.YAMLstringify = function YAMLstringify(object) {
  const { dump } = require('js-yaml')
  return dump(object)
}
