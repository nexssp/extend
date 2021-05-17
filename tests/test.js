const extend = require("../");

extend(); // load all extensions
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

// But not a JSON
console.log(
  ['{"x":1}', '{"name":"John", "age":31, "city":"New York"}'].argStripQuotes()
);

console.log('"test2" => ' + '"test2"'.stripEndQuotes()); // => test2
console.log("'differentQuotes\" => " + "'differentQuotes\"".stripEndQuotes());
