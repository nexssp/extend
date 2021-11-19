const { JSONstringify, JSONparse } = require('../') // Load all just in case usage of all of them is ok.
const x = JSONstringify({
  x: 1,
  y: function (e) {
    console.log(`Hello! ${e}}`)
  },
})

let separator = '\\n'
if (process.platform === 'win32') {
  separator = '\\r\\n'
}

module.exports = {
  notEval: true, // params won't be evaluated before begin.
  nexsstests: [
    {
      type: 'equal',
      title: 'Object.JSONstringify()',
      params: [
        x,
        '{"x":1,"y":"function (e) {' +
          separator +
          '    console.log(`Hello! ${e}}`)' +
          separator +
          '  }"}',
      ],
    },
    {
      type: 'equal',
      title: 'Object.JSONparse()',
      params: [
        JSONstringify(
          JSONparse(
            '{"x":1,"y":"function (e) {' +
              separator +
              '    console.log(`Hello! ${e}}`)' +
              separator +
              '  }"}'
          )
        ),
        '{"x":1,"y":"function (e) {' +
          separator +
          '    console.log(`Hello! ${e}}`)' +
          separator +
          '  }"}',
      ],
    },
  ],
}
