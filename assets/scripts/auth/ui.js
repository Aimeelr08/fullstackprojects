'use strict';
const events = require('assets/scripts/auth/events.js')
const ui = (location, config) => {

const target = {}

// const signin = (data) => {
//   $('#page3').hide()
//
// //};
// const signup = (data) => { };
// const posts = (data) => { };
// const user = (data) => { };

const success = (data) => {
$('#my-form').append(data)
};

const failure = (err) => {
  // handle failure
};

module.exports = {
  ui,
  success,
  failure,
