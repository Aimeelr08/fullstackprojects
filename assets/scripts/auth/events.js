/*global $:true*/
/*eslint no-undef: "error"*/

'use strict'
$('.form-signin').hide()
$('div').hide()
$('#red').hide()
$('#pink').hide()
$('.btn-block').hide()
$('#demo').hide()
$('#demo2').hide()

function changePart() {
 document.getElementById("demo2");
  $('.btn-floating').toggle();
  $('.form-signin').show();
}

function changePart2() {

  document.getElementById("demo3")
  $('#red').show("demo3");
  $('#pink').hide("demo2");
}

function changePart3() {
  $('#pink').show("demo2");
  $('#red').hide("demo2");

}

// module.exports = events
