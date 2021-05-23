const { YAMLstringify, YAMLparse } = require('../yaml') // Load all just in case usage of all of them is ok.
const x = YAMLstringify({
  x: 1,
  y: 'not a function Yaml not handling that',
})

module.exports = {
  notEval: true, // params won't be evaluated before begin.
  nexsstests: [
    {
      type: 'equal',
      title: 'Object.YAMLstringify()',
      params: [x, `x: 1\n'y': not a function Yaml not handling that\n`],
    },
    {
      type: 'equal',
      title: 'String.YAMLparse()',
      params: [YAMLparse(x), { x: 1, y: 'not a function Yaml not handling that' }],
    },
  ],
}
