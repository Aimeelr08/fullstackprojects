'use strict'

const store = {
  $('form').submit(function(){

      var obj = $('form').serializeJSON();

      $.ajax({
          type: 'POST',
          url: 'http://fullerstackproject.com/post',
          dataType: 'json',
          data: JSON.stringify(obj),
          contentType : 'application/json',
          success: function(data) {
              alert(data)
          }
      });}

module.exports = store
