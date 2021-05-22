# @nexssp/extend

Some functions written/re-written and/or collected to make things easier in JavaScript/NodeJS.

## How to Start?

```js
const extend = require('@nexssp/extend')

extend() // load all extensions
extend('array', 'string') // load selected extension
console.log(`All libs: `, extend.libs)
// list available extensions: ["array", "string", "object", "yaml", "json"]

// or just require("@nexssp/extend")("array")
```

## New Object dot notation (no eval!)

```js
{}.dset('a.b.c.d.a.b.a', { x: 1, y: 2 })
// will produce: {"a":{"b":{"c":{"d":{"a":{"b":{"a":{"x":1,"y":2}}}}}}}}

const x = {
  1: 2,
  [',:$']: { w: { eeee: 5 } },
  x: 12222,
  y: { z: 1345 },
}

console.log(x.dget(',:$.w.eeee')) // returns 5

// for deletion just use standard delete eg. delete x.y.z
```

## New String.addTimestamp and String.trimExtension

```js
'mystring'.addTimestamp() //==> mystring_2021-05-21T08.34.33.064Z
'myfile.png'.addTimestamp() //==> myfile_2021-05-21T08.35.35.058Z.png
'myfile.png'.trimExtension() // ==> myfile
```

## New Object.findByProp() and Object.deleteByProp()

### Object.findByProp()

```js
{
  commands: [
    { name: "a1", "something else": "x" },
    { name: "a2", "something else": "y" },
  ],
  key2: "val2",
}.findByProp("commands", "name", "a2")
```

### Object.deleteByProp()

```js
{
  commands: [
    { name: "a1", "something else": "x" },
    { name: "a2", "something else": "y" },
  ],
  key2: "val2",
}.deleteByProp("commands", "name", "a1")
```

## New

- **parseURL** - replacement for `url.parse is depracated` - There was a great function **url.parse** but it is depracated. `parseURL` is doing just that.

- **argvAddQuotes** - adds quotes to the parameters:

`[ 'nexss','par1','par with space' ,'--x=a b c' ,"y='a c d'",'a b c' ]`.argvAddQuotes() ==>  
`[ 'nexss','par1','"par with space"','--x="a b c"','y="a c d"','"a b c"']`

## New YAML and JSON with 'function' serialize

### Yaml

```js
extend('yaml')

const yamlFromObject = {
  x: 1,
  y: 5,
  nested: { x: 5, nested: { t: 'test' } },
}.YAMLstringify()

console.log('YAMLfromObject:', yamlFromObject)

// YAMLfromObject: x: 1
// 'y': 5
// nested:
//   x: 5
//   nested:
//     t: test

console.log('ObjectFromYaml', yamlFromObject.YAMLparse())
// ObjectFromYaml { x: 1, y: 5, nested: { x: 5, nested: { t: 'test' } } }
```

### JSON

```js
extend('json')
const x = {
  x: 1,
  y: function (e) {
    console.log(`Hello! ${e}}`)
  },
}.JSONstringify() // {"x":1,"y":"function (e) {\r\n    console.log(`Hello! ${e}}`);\r\n  }"}

console.log(x.JSONparse()) // { x: 1, y: [Function (anonymous)] }
```

### New Object functions

```js
extend("object");
{ key1: "val1", key2: "val2" }.invert() // { val1: 'key1', val2: 'key2' }
```

### NEW for Strings and Arrays

- **argStripQuotes()** - "test1" => test2 OR more advanced **'someadvanced="sd asd asd asd=,$$$=!"'** => someadvanced=sd asd asd asd=,$$$=!

### NEW for Strings

- **StripTerminalColors()** - removes terminal colors
- **StripEndQuotes()** - "test1" => test2

## Usage

### Strings

```js
// The same is doing NodeJS. All arguments have stripped out the ' and " begining and end.

//Also this works
"mystring='xxx'".argStripQuotes() // mystring=xxx

// Above one function has been built based on article:
// https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
// We have built them as prototypes and modified them so also working for arrays.

'"test2"'.stripEndQuotes() // => test2
'Some string'.pad(20, '=') // => ====Some string=====
'abc def'.similarity('abc deg') // => 85.71428571428571
'this is a test'.camelCase() // => This is a test
'this ${myvar} and it is ${myvar2}'.template({
  myvar: 'works!',
  myvar2: 'amazing!',
}) // => this works! and it is amazing!
```

## Arrays

```js

[
  "myparam1='test1'", // => myparam1=test1
  'myparam2="test2"', // => myparam2=test2
  'someadvanced="sd asd asd asd=,$$$=!"', // => someadvanced=sd asd asd asd=,$$$=!
  '"Nexss Programmer"="test more adv"', // => Nexss Programmer=test more adv
].argStripQuotes();

["my val1", "my second val",
"and another val"].remove("my second val"); // => [ 'my val1', 'and another val' ]
[[1, 2], [3, 4]].flat(); // =>  [ 1, 2, 3, 4 ]
[1, [2, [5, 2], [6]]].flat(); // =>  [ 1, 2, [ 5, 2 ], [ 6 ] ]
[1, [2, [5, 2, [6]]].flat(2); // => [ 1, 2, 5, 2, [ 6 ] ]

```
