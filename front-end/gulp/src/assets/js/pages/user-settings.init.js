/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: setting init js
*/

flatpickr("#datepicker-range", {
  mode: "range",
  altInput: true,
  altFormat: "Y",
});

new Choices("#choices-multiple-skill-input", {
  removeItemButton: true,
});
