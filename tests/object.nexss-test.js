require('../src/extend')() // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      type: 'equal',
      title: 'Object.dget()',
      params: [{ key1: 'val1', key2: { key4: 'works' } }.dget('key2.key4'), /^works$/],
    },
    {
      type: 'equal',
      title: 'Object.dget() return null, path does not exist.',
      params: [{ key1: 'val1', key2: { key4: 'works' } }.dget('key2.key4.notexistance'), undefined],
    },
    {
      type: 'equal',
      title: 'Object.dset() - big and set object',
      params: [
        JSON.stringify({ works: 'ok' }.dset('a.b.c.d.a.b.a', { x: 1, y: 2 })),
        '{"works":"ok","a":{"b":{"c":{"d":{"a":{"b":{"a":{"x":1,"y":2}}}}}}}}',
      ],
    },
    {
      type: 'equal',
      title: 'Object.dset()',
      params: [
        JSON.stringify({ key1: 'val1', key2: 'val2' }.dset('key1.key2.key3', 'AAAAAAAAAA')),
        '{"key1":{"key2":{"key3":"AAAAAAAAAA"}},"key2":"val2"}',
      ],
    },
    {
      type: 'equal',
      title: 'Object.invert()',
      params: [
        JSON.stringify({ key1: 'val1', key2: 'val2' }.invert()),
        '{"val1":"key1","val2":"key2"}',
      ],
    },
    {
      type: 'equal',
      title: 'Object.findByProp()',
      params: [
        JSON.stringify(
          {
            commands: [
              { name: 'a1', 'something else': 'x' },
              { name: 'a2', 'something else': 'y' },
            ],
            key2: 'val2',
          }.findByProp('commands', 'name', 'a2')
        ),
        '{"name":"a2","something else":"y"}',
      ],
    },
    {
      type: 'equal',
      title: 'Object.deleteByProp()',
      params: [
        JSON.stringify(
          {
            commands: [
              { name: 'a1', 'something else': 'x' },
              { name: 'a2', 'something else': 'y' },
            ],
            key2: 'val2',
          }.deleteByProp('commands', 'name', 'a1')
        ),
        '{"name":"a1","something else":"x"}',
      ],
    },
  ],
}
