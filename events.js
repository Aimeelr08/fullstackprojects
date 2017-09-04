'use strict'

$('#myRequest').on('click', function() {

  $('button').toggle(function() {

    $(".loading").hide();


  })
})
$('#myPage').on('click', function() {

  $('button').toggle(function() {

    $('.page').hide();


  })
})

$('#myColors').on('click', function() {

  $('button').toggle(function() {

    $('.colorPage').hide();


  })
})

// // for (i = 0; i < close.length; i++) {
// //   close[i].onclick = function() {
// //     var div = this.parentElement;
// //     div.style.display = "none";
//
// // document.getElementById("demo").innerHTML = cars[0];
// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
//
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     return null
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// } /// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// ///close button
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
//
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     return console.log("no input");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
//
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
// //  $('.showSingle').click(function() {
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
