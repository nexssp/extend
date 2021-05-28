const assert = require('assert')
const { deleteByProp, dget, dset, invert, push, findByProp } = require('../src/extend2') // Load all just in case usage of all of them is ok.

const threeParameters = findByProp(
  [
    { name: 'a1', 'something else': 'x' },
    { name: 'a2', 'something else': 'y' },
  ],
  'name',
  'a2'
)

assert.deepStrictEqual(threeParameters, { name: 'a2', 'something else': 'y' })

const fourParameters = findByProp(
  {
    commands: [
      { name: 'a1', 'something else': 'x' },
      { name: 'a5', 'something else2': 'y' },
    ],
    key2: 'val2',
  },
  'commands',
  'name',
  'a5'
)

assert.deepStrictEqual(fourParameters, { name: 'a5', 'something else2': 'y' })

const notFound1 = findByProp(
  {
    commands: [
      { name: 'a1', 'something else': 'x' },
      { name: 'a5', 'something else2': 'y' },
    ],
    key2: 'val2',
  },
  'commands',
  'name',
  'a123'
)

assert.deepStrictEqual(notFound1, undefined)

const notFound2 = findByProp(
  {
    commands: [
      { name: 'a1', 'something else': 'x' },
      { name: 'a5', 'something else2': 'y' },
    ],
    key2: 'val2',
  },
  'commands'
)

assert.deepStrictEqual(notFound2, undefined)

const notFound3 = findByProp(
  {
    commands: [
      { name: 'a1', 'something else': 'x' },
      { name: 'a5', 'something else2': 'y' },
    ],
    key2: 'val2',
  },
  'commands'
)

assert.deepStrictEqual(notFound3, undefined)
