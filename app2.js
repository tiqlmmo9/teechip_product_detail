//click login/signup to open form login
function click_to_login() {
  shopper_login.style.display = "flex";
  //   originPlaceholder();
  zoom_placeholder.style.transform = "translateY(+.75rem)";
  zoom_placeholder.style.fontSize = "1rem";
}

//click icon x (close) to close form shopper_login/signup
function click_to_close() {
  shopper_login.style.display = "none";
}
window.addEventListener("click", function(e) {
  const shopper_login = document.querySelector(".shopper-login");
  const shopper_login_item = document.querySelector(".shopper-login__item");
  if (
    shopper_login.contains(e.target) &&
    !shopper_login_item.contains(e.target)
  ) {
    shopper_login.style.display = "none";
  }
});
