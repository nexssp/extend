exports.invert = function invert(object) {
  var new_obj = {}

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      new_obj[object[prop]] = prop
    }
  }

  return new_obj
}

// Takes 3 or 4 parameters (without location can search for array of objects )
exports.findByProp = function findByProp(object, location, prop, value) {
  let search = object
  if (arguments.length === 4) {
    search = object[location]
  } else {
    value = prop
    prop = location
  }

  let f = (e) => e[prop] && e[prop] === value
  if (value instanceof RegExp) {
    f = (e) => e[prop] && value.test(e[prop])
  }

  return search ? search.find && search.find(f) : undefined
}

exports.deleteByProp = function deleteByProp(object, location, prop, value) {
  const found = object[location] && object[location].find((e) => e[prop] === value)
  if (found) {
    object[location] = object[location].filter((e) => e[prop] !== value)
    return found
  }
}

exports.dget = function dget(object, path) {
  return path.split('.').reduce((acc, red) => acc && acc[red], object)
}

exports.dset = function dset(object, path, value) {
  const pathSplit = path.split('.')
  let obj = {}
  let tmp = obj
  for (let [i, p] of pathSplit.entries()) {
    tmp[p] = pathSplit.length === i + 1 ? value : {}
    tmp = tmp[p]
  }
  return Object.assign({}, object, obj)
}

exports.push = function push(obj, location, what) {
  if (!obj[location]) {
    obj[location] = []
  }

  if (!Array.isArray(obj[location])) {
    // if this is not array convert to array to add new value
    obj[location] = [obj[location]]
  }

  obj[location].push(what)
  return Object.assign({}, obj)
}
