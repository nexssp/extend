# @nexssp/extend

Some functions written/re-written and/or collected to make things easier in JavaScript and NodeJS.

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

## How to Start?

```js
const extend = require("@nexssp/extend");

extend(); // load all extensions
extend("array", "string"); // load selected extension
console.log(`All libs: `, extend.libs); // list available extensions: array, string

// or just require("@nexssp/extend")("array")
```

## Usage

### Strings

```js
// The same is doing NodeJS. All arguments have stripped out the ' and " begining and end.

//Also this works
"mystring='xxx'".argStripQuotes(); // mystring=xxx

// Above one function has been built based on article:
// https://stackoverflow.com/questions/19156148/i-want-to-remove-double-quotes-from-a-string
// We have built them as prototypes and modified them so also working for arrays.

'"test2"'.stripEndQuotes(); // => test2
"Some string".pad(20, "="); // => ====Some string=====
"abc def".similarity("abc deg"); // => 85.71428571428571
"this is a test".camelCase(); // => This is a test
"this ${myvar} and it is ${myvar2}".interpolate({
  myvar: "works!",
  myvar2: "amazing!",
}); // => this works! and it is amazing!
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
