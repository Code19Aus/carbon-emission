document.querySelector("#btn_sign").addEventListener("click", function (e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  try {
    axios
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        var resUser = response.data.message;
        localStorage.setItem("rmg_product_user", JSON.stringify(resUser));
        window.location = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
});
