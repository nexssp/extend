# @nexssp/extend

**15.01.2022 Upgrade** - Now works also with `import` as module.

```js
const array = require('@nexssp/extend/array')
console.log(Object.keys(array)) // see all available functions for array

// or
import { remove, flat, range } from '@nexssp/extend/array'
```

Some functions written/re-written and/or collected to make things easier in JavaScript/NodeJS.

## How to Start?

```js
// Change to version 2.0 - now you loads as parameter on require:
const extend = require('@nexssp/extend/array')
```

## New range function

```js
range(0, 63) // produces [0, 1, 2, 3......62, 63 ] (note 63 includes!)
```

## filterArray

```js
filterArray([1, 2, 3, 4], [2, 3]) // [1, 4]
```

## New Object dot notation (no eval!)

```js
dset({}, 'a.b.c.d.a.b.a', { x: 1, y: 2 })
// will produce: {"a":{"b":{"c":{"d":{"a":{"b":{"a":{"x":1,"y":2}}}}}}}}

const x = {
  1: 2,
  [',:$']: { w: { eeee: 5 } },
  x: 12222,
  y: { z: 1345 },
}

console.log(dget(x, ',:$.w.eeee')) // returns 5

// for deletion just use standard delete eg. delete x.y.z
```

## New String.addTimestamp and String.trimExtension

```js
addTimestamp('mystring') //==> mystring_2021-05-21T08.34.33.064Z
addTimestamp('myfile.png') //==> myfile_2021-05-21T08.35.35.058Z.png
trimExtension('myfile.png') // ==> myfile
```

## New Object.findByProp() and Object.deleteByProp()

### Object.findByProp()

Now also with regexp

```js
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
  'a2' // this can be also regexp from 2.0.3+: /^a2$/
)
```

### Object.deleteByProp()

```js
deleteByProp(
  {
    commands: [
      { name: 'a1', 'something else': 'x' },
      { name: 'a2', 'something else': 'y' },
    ],
    key2: 'val2',
  },
  'commands',
  'name',
  'a1'
)
```

## New

- **parseURL** - replacement for `url.parse is depracated` - There was a great function **url.parse** but it is depracated. `parseURL` is doing just that.

- **argvAddQuotes** - adds quotes to the parameters:

argvAddQuotes(`[ 'nexss','par1','par with space' ,'--x=a b c' ,"y='a c d'",'a b c' ]`) ==>  
`[ 'nexss','par1','"par with space"','--x="a b c"','y="a c d"','"a b c"']`

## New YAML and JSON with 'function' serialize

### Yaml

```js
const { YAMLstringify, YAMLparse } = extend('@nexssp/extend/yaml')

const yamlFromObject = YAMLstringify({
  x: 1,
  y: 5,
  nested: { x: 5, nested: { t: 'test' } },
})

console.log('YAMLfromObject:', yamlFromObject)

// YAMLfromObject: x: 1
// 'y': 5
// nested:
//   x: 5
//   nested:
//     t: test

console.log('ObjectFromYaml', YAMLparse(yamlFromObject))
// ObjectFromYaml { x: 1, y: 5, nested: { x: 5, nested: { t: 'test' } } }
```

### JSON

```js
const { JSONstringify, JSONparse } = extend('@nexssp/extend/json')
const x = JSONstringify({
  x: 1,
  y: function (e) {
    console.log(`Hello! ${e}}`)
  },
}) // {"x":1,"y":"function (e) {\r\n    console.log(`Hello! ${e}}`);\r\n  }"}

console.log(JSONparse(x)) // { x: 1, y: [Function (anonymous)] }
```

### New Object functions

```js
const { invert } = extend('@nexssp/extend/object')
invert({ key1: 'val1', key2: 'val2' }) // { val1: 'key1', val2: 'key2' }
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
argStripQuotes("mystring='xxx'") // mystring=xxx

// Above one function has been built based on article:
// https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
// We have built them as prototypes and modified them so also working for arrays.

stripEndQuotes('"test2"') // => test2
pad('Some string', 20, '=') // => ====Some string=====
similarity('abc def', 'abc deg') // => 85.71428571428571
camelCase('this is a test') // => This is a test
template('this ${myvar} and it is ${myvar2}', {
  myvar: 'works!',
  myvar2: 'amazing!',
}) // => this works! and it is amazing!
```

## Arrays

```js

argStripQuotes([
  "myparam1='test1'", // => myparam1=test1
  'myparam2="test2"', // => myparam2=test2
  'someadvanced="sd asd asd asd=,$$$=!"', // => someadvanced=sd asd asd asd=,$$$=!
  '"Nexss Programmer"="test more adv"', // => Nexss Programmer=test more adv
]);

remove(["my val1", "my second val",
"and another val"],"my second val"); // => [ 'my val1', 'and another val' ]
flat([[1, 2], [3, 4]]); // =>  [ 1, 2, 3, 4 ]
flat([1, [2, [5, 2], [6]]]); // =>  [ 1, 2, [ 5, 2 ], [ 6 ] ]
flat([1, [2, [5, 2, [6]]],2); // => [ 1, 2, 5, 2, [ 6 ] ]

```
