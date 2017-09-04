'use strict';

const success = (data) => {
$('#my-form').append(data)
};

const failure = (err) => {
  // handle failure
};

module.exports = {
  success,
  failure,
