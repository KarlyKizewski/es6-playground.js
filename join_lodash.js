"use strict";
// require('lodash');

var _= {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    for(let value of array) {
      console.log(array.join());
    }
  }
}



const value = _.join(["hello", "goodbye"], ", ")
// repeats to user, but it works! needs refactoring