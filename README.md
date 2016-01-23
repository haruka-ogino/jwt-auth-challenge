# Modules, First-class functions, Strings and Numbers

## Concepts 

Number | Name 
--------|-------------------
0. | [Node]
1. | [Data-types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
2. | [Test Driven Development](https://github.com/dev-academy-programme/curriculum/tree/master/concepts/test-driven-development) 
3. | [Functions as 'first class' objects](http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/)
4. | [Common JS require and module.exports]


## Part 1: Kata : strings and numbers

In this kata we'll going to write our own `filter` and `map` functions again. Then use them to filter and map an array of strings. Now, you have probably noticed that JavaScript already has these methods attached to the Array object:

 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 


So why are we going to rewrite them? There's a couple of reasons. The first is that by rewriting them we deepen our understanding of what's going on when we call these functions. Second, we're going to write them in a way that has certain advantages which we'll cover later. Third, we're going to package up our functions into our own npm package and learn about how the **n**ode **p**ackage **m**anager works.


Our map and filter functions will themselves accept **functions as parameters**. This is one of the interesting features of Javascript - we can pass functions into other functions, where the enclosing function will call them. If this is unfamiliar try out the following code in the browser and talk through it with someone: 

```js 
function boss (subord) {
  console.log('I am the boss function')
  subord()
}

function subordinate () {
  console.log('I am the subordinate function')
}

boss(subordinate)
```

The other difference is that instead of just using `console.log()' to test our code, we'll use our own "assert" function to make this prettier and easier, and "require" it into the main file. 

We'll cover how this works in Part 2. For now, in your root directory of this exercise in the terminal run:

`node app/main.js`

You should a series of failing tests, but our `assert` function is coloring the console output red and printin a red x. Your goal, once aagain, is to make the tests pass. 



## Part 2: Common JS Modules

You may have noticed that your `main.js` file grew reasonably large in Part 1.
At 100-150 lines a file mmay be manageable. But much larger than this it gets much harder to navigate around the file and understand 
how it works. Particularly if you didn't write the file orginally.
In part 2 we'll use a "common" strategy to manage the size of our main file.

First, take a look in `utils/assert.js`.

Then the top of the `app/main.js` file:

```js
var assert = require('../utils/assert')
var data = require('./data')

// more code
```

Node allows us to write code "modules" using the [Common JS](https://nodejs.org/docs/latest/api/modules.html) format. 

0. Read [Understanding module.exports and exports in Node.js](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)
1. Discuss with your pair how you think the `main.js` 'finds' and uses `assert()`
2. Create a new file `utils/index.js`
3. Move your `filter`, `map`, and `countIf` functions over to `utils/index.js` (deleting them in `main.js`!).
4. Your goal is to "export" the functions from `utils/index.js` and require them into `main.js`
5. Make your tests pass once again - this time using the "required" functions in `utils/index.js`. 
6. Refactor your code using all three "flavours" of requiring and exporting described below -your tests should pass each time!.
7. Discuss with you pair the advantages and disadvantages of using modules and each flavour exporting..

### Common JS: Three flavours

1. Exporting an object with functions as properties:

```js
// utils/index.js

module.exports = {
  filter: function () {
    // your code
  },
  map: function () {
    // your code
  }
  ...
}

```

2(a). Exporting functions in separate files: 
```js
// utils/filter.js 
module.exports = function () {
  // your code
}


//main.js
var filter = require('../utils/filter.js')

```
2(b) Exporting functions in separate files then combining them into a an object in `index.js`:
```js
// index.js

module.exports = {
  filter: require('./filter.js'),
  map: require('./map.js),
  ...
}


// main.js
// note: require will automatically look for the index.js file
// if it requires a folder path
var utils = require('../utils')

var numbers = utils.map(toNumber, data)

```

3. Exporting using the `exports.myFunctionName = ` syntax:
```js
// index.js

exports.map = function () {
  // your code
}

```

## Part 3: npm modules





## Part 3: npm modules



