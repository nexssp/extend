require("../src/extend")(); // Load all just in case usage of all of them is ok.
const x = {
  x: 1,
  y: "not a function Yaml not handling that",
}.YAMLstringify();

console.log(x);

module.exports = {
  notEval: true, // params won't be evaluated before begin.
  nexsstests: [
    {
      type: "equal",
      title: "Object.YAMLstringify()",
      params: [x, `x: 1\n'y': not a function Yaml not handling that\n`],
    },
    {
      type: "equal",
      title: "String.YAMLparse()",
      params: [
        '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`);\\n  }"}'
          .JSONparse()
          .JSONstringify(),
        '{"x":1,"y":"function (e) {\\n    console.log(`Hello! ${e}}`);\\n  }"}',
      ],
    },
  ],
};
