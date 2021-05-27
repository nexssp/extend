const { deleteByProp, dget, dset, invert, push, findByProp } = require('../') // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      type: 'equal',
      title: 'Object.push()',
      params: [
        push({ key1: 'val1', key2: { key4: 'works' } }, 'key1', 'myval'),
        { key1: ['val1', 'myval'], key2: { key4: 'works' } },
      ],
    },
    {
      type: 'equal',
      title: 'Object.dget()',
      params: [dget({ key1: 'val1', key2: { key4: 'works' } }, 'key2.key4'), /^works$/],
    },
    {
      type: 'equal',
      title: 'Object.dget() return null, path does not exist.',
      params: [
        dget({ key1: 'val1', key2: { key4: 'works' } }, 'key2.key4.notexistance'),
        undefined,
      ],
    },
    {
      type: 'equal',
      title: 'Object.dset() - big and set object',
      params: [
        dset({ works: 'ok' }, 'a.b.c.d.a.b.a', { x: 1, y: 2 }),
        {
          works: 'ok',
          a: { b: { c: { d: { a: { b: { a: { x: 1, y: 2 } } } } } } },
        },
      ],
    },
    {
      type: 'equal',
      title: 'Object.dset()',
      params: [
        dset({ key1: 'val1', key2: 'val2' }, 'key1.key2.key3', 'AAAAAAAAAA'),
        { key1: { key2: { key3: 'AAAAAAAAAA' } }, key2: 'val2' },
      ],
    },
    {
      type: 'equal',
      title: 'Object.invert()',
      params: [invert({ key1: 'val1', key2: 'val2' }), { val1: 'key1', val2: 'key2' }],
    },
    {
      type: 'equal',
      title: 'Object.findByProp()',
      params: [
        findByProp(
          {
            commands: [
              { name: 'a1', 'something else': 'x' },
              { name: 'a2', 'something else': 'y' },
            ],
            key2: 'val2',
          },
          'commands',
          'name',
          'a2'
        ),
        { name: 'a2', 'something else': 'y' },
      ],
    },
    {
      type: 'equal',
      title: 'Object.deleteByProp()',
      params: [
        deleteByProp(
          {
            commands: [
              { name: 'a1', 'something else': 'x' },
              { name: 'a2', 'something else': 'y' },
            ],
            key2: 'val2',
          },
          'commands',
          'name',
          'a1'
        ),
        { name: 'a1', 'something else': 'x' },
      ],
    },
  ],
}
