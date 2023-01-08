/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: pricing init js
*/

function check() {
  var checkBox = document.getElementById("plan-switch");
  var month = document.getElementsByClassName("month");
  var annual = document.getElementsByClassName("annual");

  for (var i = 0; i < month.length; i++) {
    if (checkBox.checked == true) {
      annual[i].style.display = "block";
      month[i].style.display = "none";
    } else if (checkBox.checked == false) {
      annual[i].style.display = "none";
      month[i].style.display = "block";
    }
  }
}
check();
