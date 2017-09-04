/*global $:true*/
/*eslint no-undef: "error"*/

'use strict'

$('div').hide()
$('#red').hide()
$('#pink').hide()
$('.btn-block').hide()
$('#demo').hide()
$('#demo2').hide()

function changePart() {
  document.getElementById("demo2").innerHTML
  $('.btn-block').show();
}

function changePart2() {

  document.getElementById("demo2").innerHTML;
  $('#red').show("demo2");
  $('#pink').hide("demo2");
}

function changePart3() {
  $('#pink').show("demo2");
  $('#red').hide("demo2");

}

// module.exports = events
