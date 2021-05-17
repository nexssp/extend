require("../src/extend")(); // Load all just in case usage of all of them is ok.
const x = {
  x: 1,
  y: function (e) {
    console.log(`Hello! ${e}}`);
  },
}.JSONstringify();

console.log(x);

module.exports = {
  notEval: true, // params won't be evaluated before begin.
  nexsstests: [
    {
      type: "equal",
      title: "Object.JSONstringify()",
      params: [
        x,
        '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`);\\n  }"}',
      ],
    },
    {
      type: "equal",
      title: "Object.JSONparse()",
      params: [
        '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`);\\n  }"}'
          .JSONparse()
          .JSONstringify(),
        '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`);\\n  }"}',
      ],
    },
  ],
};
