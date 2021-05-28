const { deleteByProp, dget, dset, invert, push, findByProp } = require('../') // Load all just in case usage of all of them is ok.

module.exports = {
  nexsstests: [
    {
      type: 'equal',
      title: 'Object.findByProp(3)',
      params: [
        findByProp(
          [
            { name: 'a1', 'something else': 'x' },
            { name: 'a2', 'something else': 'y' },
          ],
          'name',
          'a2'
        ),
        { name: 'a2', 'something else': 'y' },
      ],
    },
    {
      type: 'equal',
      title: 'Object.findByProp(4)',
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
  ],
}
