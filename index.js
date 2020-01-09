'use strict';

const validator = require('./lib/validator.js');

validator.isValid();

const personRules = {
  fields: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    age: { type: 'number', required: true },
    children: { type: 'array', valueType: 'string' },
  },
};

console.log('personRules', validator.isString('personRules'))

const susan = {
  id: '123-45-6789',
  name: 'Susan McDeveloperson',
  age: 37,
  children: [],
};

console.log('orange', validator.isString('susan'))

