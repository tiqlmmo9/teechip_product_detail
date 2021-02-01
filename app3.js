var change_color_search = document.getElementById("change_color_search");

var search_list = document.getElementById("search_list");
var close_search_list = document.getElementById("close_search_list");
var zoom_placeholder = document.getElementById("zoom_placeholder");
var css_search = document.getElementById("css_search");
var css_search__icon = document.getElementById("css_search_icon");
var input_line_bottom = document.getElementById("input_line_bottom");
var btn_close_to_del = document.getElementById("btn_close_to_del");
var text_input = document.getElementById("text_input");
var shopper_login = document.getElementById("shopper_login");

function toggle_visibility() {
  text_input.focus();
  search_list.style.display = "flex";
  close_search_list.style.display = "flex";

  //Css placeholder
  zoom_placeholder.style.color = "#FC6514";
  zoom_placeholder.style.fontSize = "0.8rem";
  zoom_placeholder.style.transform = "translateY(.3rem)";

  //Css search
  css_search.style.border = "none";
  css_search.style.borderRadius = "2px";
  css_search.style.boxShadow =
    "0 0px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)";
  css_search__icon.style.color = "#FC6514";
  change_color_search.style.color = "#FC6514";

  input_line_bottom.style.display = "block";

  text_input.oninput = function(e) {
    btn_close_to_del.style.display = "flex";
  };
  // btn_close_to_del.style.display="flex";
  // var a=document.querySelector("input").value;
  // console.log(a);
}
//Placeholder become normal


// Click icon x (close) to delete text input
function close_to_del() {
  text_input.value = "";
  toggle_visibility(); //put mouse point input search
  if (text_input.value != "") {
    btn_close_to_del.style.display = "flex";
  } else {
    btn_close_to_del.style.display = "none";
  }
}
window.addEventListener("click", function(e) {
  const search = document.querySelector(".search__input-show-list");
  const search2 = document.querySelector(".close-search-list");
  if (!search.contains(e.target) && search2.contains(e.target)) {
    search.style.display = "none";
  }
});
