const extend = require("../");

extend(); // load all extensions
extend("array", "string", "object", "yaml", "json"); // load selected extension
console.log(`All libs: `, extend.libs); // list available extensions

// argvAddQuotes

const argv1 = [
  "nexss",
  "par1",
  "par with space",
  "--x=a b c",
  "y='a c d'",
  "a b c",
];
console.log(argv1, "==>", argv1.argvAddQuotes());
// JSON - enhanced by also storing the eg. functions
const x = {
  x: 1,
  y: function (e) {
    console.log(`Hello! ${e}}`);
  },
}.JSONstringify();
console.log(x);

// And back

console.log(x.JSONparse());

const yamlFromObject = {
  x: 1,
  y: 5,
  nested: { x: 5, nested: { t: "test" } },
}.YAMLstringify();

// YAML
console.log("YAMLfromObject:", yamlFromObject);

console.log("ObjectFromYaml", yamlFromObject.YAMLparse());

console.log({ key1: "val1", key2: "val2" }.invert());

// New functions
console.log(
  [
    "myparam1='test1'",
    'myparam2="test2"',
    'someadvanced="sd asd asd asd=,$$$=!"',
    '"Nexss Programmer"="test more adv"',
    '{"x":1}',
  ].argStripQuotes()
);

// But not a JSON
console.log(
  ['{"x":1}', '{"name":"John", "age":31, "city":"New York"}'].argStripQuotes()
);

console.log('"test1" => ' + '"test2"'.stripEndQuotes()); // => test2
console.log("'differentQuotes\" => " + "'differentQuotes\"".stripEndQuotes());

// ================
console.log("Some string".pad(20, "=")); // => ====Some string=====
console.log("abc def".similarity("abc deg")); // => 85.71428571428571
console.log("this is a test".camelCase()); // => This is a test
console.log(
  "this ${myvar} and it is ${myvar2}".interpolate({
    myvar: "works!",
    myvar2: "amazing!",
  })
); // => this works! and it is amazing!

console.log("Arrays");

console.log(
  ["my val1", "my second val", "and another val"].remove("my second val")
); // => [ 'my val1', 'and another val' ]
console.log(
  [
    [1, 2],
    [3, 4],
  ].flat()
); // =>  [ 1, 2, 3, 4 ]
console.log([1, [2, [5, 2], [6]]].flat()); // =>  [ 1, 2, [ 5, 2 ], [ 6 ] ]
console.log([1, [2, [5, 2, [6]]]].flat().flat()); // => [ 1, 2, 5, 2, [ 6 ] ]
console.log([1, [2, [5, 2, [6]]]].flat().flat().flat()); // => [ 1, 2, 5, 2, 6 ]
