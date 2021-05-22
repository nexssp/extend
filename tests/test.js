const extend = require('../')

extend() // load all extensions
// JSON - enhanced by also storing the eg. functions
const x = ['nexss', 'par1', 'par with space', '--x=a b c', "y='a c d'", 'a b c'].argvAddQuotes()
console.log(x)
