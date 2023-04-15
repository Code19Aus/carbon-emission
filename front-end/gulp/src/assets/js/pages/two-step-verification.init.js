/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: two step verification Init Js File
*/

// move next
function moveToNext(elem, count) {
  if (elem.value.length > 0) {
    document.getElementById("digit" + count + "-input").focus();
  }
}
