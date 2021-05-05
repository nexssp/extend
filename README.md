# @nexssp/extend

Some functions written/re-written and/or collected to make things easier in JavaScript and NodeJS.

**WIP..**

## NEW

### Strings

- **StripEndQuotes()** - "test1" => test2

## Strings

```js
const extend = require("@nexssp/extend");

extend(); // load all extensions
extend("array", "string"); // load selected extension
console.log(`All libs: `, extend.libs); // list available extensions

// or just require("@nexssp/extend")("array")

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
["my val1", "my second val",
"and another val"].remove("my second val"); // => [ 'my val1', 'and another val' ]
[[1, 2], [3, 4]].flat(); // =>  [ 1, 2, 3, 4 ]
[1, [2, [5, 2], [6]]].flat(); // =>  [ 1, 2, [ 5, 2 ], [ 6 ] ]
[1, [2, [5, 2, [6]]].flat().flat(); // => [ 1, 2, 5, 2, [ 6 ] ]

```
