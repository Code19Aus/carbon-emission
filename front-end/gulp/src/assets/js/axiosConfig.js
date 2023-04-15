// axios.defaults.baseURL = "https://api.rmg.code19products.website";
axios.defaults.baseURL = "https://api.qlytics.xyz";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

var user = JSON.parse(localStorage.getItem("rmg_product_user"));
var path = window.location.pathname.toLocaleLowerCase();

if (user) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;

  // check if token is expired
  var date = new Date();
  var expires = new Date(user?.expires);

  if (date > expires) {
    Toastify({
      text: "Your session has expired. Please login again.",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();

    userSignOut();
  }

  if (path == "/choose-user.html" || path == "/login.html") {
    window.location = "/";
  }
} else {
  if (path == "/choose-user.html" || path == "/login.html") {
  } else {
    window.location = "/choose-user.html";
  }
}

function userSignOut() {
  localStorage.removeItem("rmg_product_user");
  window.location = "/choose-user.html";
}
