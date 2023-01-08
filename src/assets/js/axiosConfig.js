// axios.defaults.baseURL = "https://api.rmg.code19products.website";
axios.defaults.baseURL = "https://api.rmg.rezvee.com";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

var user = JSON.parse(localStorage.getItem("rmg_product_user"));
var path = window.location.pathname.toLocaleLowerCase();

if (user) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;

  if (path == "/login.html") {
    window.location = "/";
  }
} else if (!user && path != "/login.html") {
  window.location = "/login.html";
}

function userSignOut(e) {
  e.preventDefault();
  localStorage.removeItem("rmg_product_user");
  window.location = "/login.html";
}
