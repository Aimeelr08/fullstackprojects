'use strict'
// const events = () => {
$('div').hide();
$('#red').hide();
$('#pink').hide();
$('.btn-block').hide();
$('#demo').hide();
$('#demo2').hide();

function changePart() {
location.hash = "page1";
  var x = "Show this page location" + location.hash;
  document.getElementById("demo2").innerHTML = x;
  // $('#red').show();
  // $('#pink').show();
  $('.btn-block').show();
}


function myFunction() {
  console.log("worked");
}

function changePart2() {


  location.hash = "page2";
  var x = "this on page:" + location.hash;
  document.getElementById("demo2").innerHTML = x;
  $('#red').show("demo2");
  $('#pink').hide("demo2");
}

// Alert some text if there has been changes to the anchor part
function myFunction2() {

  console.log("worked");
}

function changePart3() {
  $('#pink').show("demo2");
  $('#red').hide("demo2");
  location.hash = "page3";
  var x = "Welcome Color page:" + location.hash;
  document.getElementById("demo2").innerHTML = x;
$('#red').hide("demo2");

}

// Alert some text if there has been changes to the anchor part
function reloadPage() {
  console.log("worked");
}
// /
// // function addRow(tableID) {
// //   // Get a reference to the table
// //   let tableRef = document.getElementById(tableID);
// //
// //   // Insert a row in the table at row index 0
// //   let newRow = tableRef.insertRow(0);
// //   // Insert a cell in the row at index 0
// //   let newCell = newRow.insertCell(0);
// //   // Append a text node to the cell
// //   let newText = document.createTextNode('Set CELL AND TIME SLOTS //bottom row');
// //   // newText.type = "input";
// //   newCell.appendChild(newText)
// // } // Call addRow() with the ID of a table
// // addRow('newText');
// //
// // // $(function(){
// // //
// // //
// // //
// // //         });
// // //         $('btn-block').click(function(){
// // //
// // //
// // //         });
// // // });
// // // $('.tap-target').tapTarget('open');
// // //  $('.tap-target').tapTarget('close');
// //
// // // // $(document).ready(function (){
// // $(function() {
// //   $('target').click(function() {
// // //
// // //     // $('.form-signin').show();
// // //       $('.page3').hide();
// //   $('.targetDiv').hide();
// // //
// // //                 $('#div4').hide();
// // //                 $('.tagline').show();
// // //   });
// //
// //  $('.targetDiv').show
// //
// //  ();
// // //     $('.tagline').hide();
// // //     $('.page2').show();
// // // // $('.form-signin').hide();
// // //     $('.div3').show();
// // //       });
// //   $('#div' + $(this).attr('target')).show();
// //   });
// // });
// //   // $(".button-collapse").sideNav();
module.exports = events
