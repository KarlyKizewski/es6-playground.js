"use strict";

var _= {
  // Implements:
  // https://loadash.com/docs#join
  join: (array, separator = ',') => {
    // write code to implement method here
    array.join(separator)
  }
}

const value = _.join(["hello", "goodbye"], ", ")

console.log(value);