const libs = ['array', 'string', 'object', 'yaml', 'json']

const { remove, flat, arrArgStripQuotes, arrArgvAddQuotes } = require('../array')
const { invert, deleteByProp, findByProp, dget, dset, push } = require('../object')
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
} = require('../string')
const { JSONparse, JSONstringify } = require('../json')
const { YAMLparse, YAMLstringify } = require('../yaml')

module.exports = {
  // Array
  remove,
  flat,
  arrArgStripQuotes,
  arrArgvAddQuotes,
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
  //JSON
  JSONparse,
  JSONstringify,
  //Yaml
  YAMLparse,
  YAMLstringify,
}
