const libs = ['array', 'string', 'object', 'yaml', 'json']

const { remove, flat, arrArgStripQuotes, arrArgvAddQuotes, filterArray, range } = require('./array')
const { invert, deleteByProp, findByProp, dget, dset, push } = require('./object')
const {
  addTimestamp,
  camelCase,
  interpolate,
  template,
  pad,
  parseURL,
  stripTerminalColors,
  stripEndQuotes,
  trimExtension,
  similarity,
} = require('./string')
const { JSONparse, JSONstringify } = require('./json')
const { YAMLparse, YAMLstringify } = require('./yaml')

module.exports = {
  // Array
  remove,
  flat,
  arrArgStripQuotes,
  arrArgvAddQuotes,
  filterArray,
  range,
  //Object
  invert,
  deleteByProp,
  findByProp,
  dget,
  dset,
  push,
  //String
  addTimestamp,
  camelCase,
  interpolate,
  template,
  pad,
  parseURL,
  stripTerminalColors,
  stripEndQuotes,
  trimExtension,
  similarity,
  //JSON
  JSONparse,
  JSONstringify,
  //Yaml
  YAMLparse,
  YAMLstringify,
}
