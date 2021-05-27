const { JSONstringify, JSONparse } = require('../') // Load all just in case usage of all of them is ok.
const x = JSONstringify({
  x: 1,
  y: function (e) {
    console.log(`Hello! ${e}}`)
  },
})

module.exports = {
  notEval: true, // params won't be evaluated before begin.
  nexsstests: [
    {
      type: 'equal',
      title: 'Object.JSONstringify()',
      params: [x, '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`)\\n  }"}'],
    },
    {
      type: 'equal',
      title: 'Object.JSONparse()',
      params: [
        JSONstringify(
          JSONparse('{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`)\\n  }"}')
        ),
        '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`)\\n  }"}',
      ],
    },
  ],
}
