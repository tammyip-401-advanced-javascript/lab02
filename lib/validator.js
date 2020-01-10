'use strict';

// let validator = module.exports = {};

class Validator {
  constructor(input, rules) {
    this.input = input;
    this.rules = rules;
  }
  isValid = () => {
    return true;
  };
  isString = () => {
    return typeof input === 'string';
  };
  isNumber = () => {
    return typeof input === 'number';
  };

  isArray = () => {
    let isInputOfType = array.isArray(input);
    let isValueOfType = true;

    if (valueType) {
      for (var i = input.length - 1; i >= 0; i--) {
        if (typeof input[i] === valueType)
          continue;
        else
          isValueOfType = false;
      }
    }
    return isInputOfType && isValueOfType;
  }
  isObject = (input) => {
    return typeof input === 'object';
  };
  isBoolean = (input) => {
    return typeof input === 'boolean';
  };
  isNumber = (input) => {
    return typeof input === 'number';
  };
  isFunction = (input) => {
    return typeof input === 'function';
  };
  isTruthy = (input) => {
    return !!input;
  };
}

// /**
//  * Based on a set of rules, is the input valid?
//  * TODO: Define the rules ... how do we send them in? How do we identify?
//  * @param input
//  * @param rules
//  * @returns {boolean}
//  */
// validator.isValid = (input, rules) => {
//   return true;
// };

// /**
//  * Is this a string?
//  * @param input
//  * @returns {boolean}
//  */
// validator.isString = (input) => {
//   return typeof input === 'string';
// };

// //Is this a number?
// validator.isNumber = (input) => {
//   return typeof input === 'number';
// };

// //Is this an array?
// validator.isArray = (input) => {
//   let isInputOfType = array.isArray(input);
//   let isValueOfType = true;

//   if (valueType) {
//     for (var i = input.length - 1; i >= 0; i--) {
//       if (typeof input[i] === valueType)
//         continue;
//       else
//         isValueOfType = false;
//     }
//   }
//   return isInputOfType && isValueOfType;
// };

// //Is this an object?
// validator.isObject = (input) => {
//   return typeof input === 'object';
// };

// //Is this a Boolean?
// validator.isBoolean = (input) => {
//   return typeof input === 'boolean';
// };

// //Is this a Number?
// validator.isNumber = (input) => {
//   return typeof input === 'number';
// };

// //Is this a Function?
// validator.isFunction = (input) => {
//   return typeof input === 'function';
// };

// validator.isTruthy = (input) => {
//   // if (input && (input === true || input === 1))
//   return !!input;
// };

module.exports = Validator;