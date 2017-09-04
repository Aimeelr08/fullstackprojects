'use strict';
const signin = (data) => { };
const signup = (data) => { };
const posts = (data) => { };
const user = (data) => { };

const success = (data) => {
$('#my-form').append(data)
};

const failure = (err) => {
  // handle failure
};

module.exports = {
  success,
  failure,
