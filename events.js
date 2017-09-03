'use strict'

function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);
if (
  // Insert a row in the table at row index 0
   let newRow = tableRef.insertRow(0);
} else {  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

}  // Append a text node to the cell
  let newText = document.createTextNode('New top row');{
  newCell.appendChild(newText);
  }
)}
// Call addRow() with the ID of a table
addRow('TableA').on('click');

// $(function(){
//
//
//
//         });
//         $('btn-block').click(function(){
//
//
//         });
// });
// $('.tap-target').tapTarget('open');
//  $('.tap-target').tapTarget('close');

// // $(document).ready(function (){
// $(function() {
//   $('target').click(function() {
//
//     // $('.form-signin').show();
//       $('.page3').hide();
//         $('#div1').hide();
//
//                 $('#div4').hide();
//                 $('.tagline').show();
//   });
//   $('.showSingle').click(function() {
//
//     $('.tagline').hide();
//     $('.page2').show();
// // $('.form-signin').hide();
//     $('.div3').show();
//       });
//     $('#div' + $(this).attr('target')).show();
//   });
// });
//   // $(".button-collapse").sideNav();
