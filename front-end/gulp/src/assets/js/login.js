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

        // add date to logout after 1 hour
        var date = new Date();
        date.setHours(date.getHours() + 1);
        resUser.expires = date;
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
