/*
Template Name: Code19 - Admin & Dashboard Template
Author: Code19
Website: https://Code19.com/
Contact: Code19@gmail.com
File: Email summernote Js File
*/

ClassicEditor.create(document.querySelector("#email-editor"))
  .then(function (editor) {
    editor.ui.view.editable.element.style.height = "200px";
  })
  .catch(function (error) {
    console.error(error);
  });
