var change_color_search = document.getElementById("change_color_search");
var search = document.querySelector(".search");
var search_list = document.getElementById("search_list");
var close_search_list = document.getElementById("close_search_list");
var zoom_placeholder = document.getElementById("zoom_placeholder");
var css_search = document.getElementById("css_search");
var css_search__icon = document.getElementById("css_search_icon");
var input_line_bottom = document.getElementById("input_line_bottom");
var btn_close_to_del = document.getElementById("btn_close_to_del");
var text_input = document.getElementById("text_input");
var shopper_login = document.getElementById("shopper_login");

// When the user clicks the button, open the modal
function toggle_visibility() {
  text_input.focus();
  search_list.style.display = "block";

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

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.oninput =

// function newFunction() {
//   if (text_input.value != "") {
//     btn_close_to_del.style.display = "flex";
//   } else {
//     btn_close_to_del.style.display = "none";
//   }
// }
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
//Placeholder become normal
function originPlaceholder() {
  search_list.style.display = "none";
  // close_search_list.style.display = "none";
  //Change color search style
  change_color_search.style.color = "#B2BEC3";
  //Change color placeholder text
  zoom_placeholder.style.color = "#B2BEC3";
  //Css search
  css_search.style.borderRadius = "5px";
  css_search.style.boxShadow = "none";
  css_search.style.border = "solid 1px #B2BEC3";
  css_search_icon.style.color = "#B2BEC3";
  input_line_bottom.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (!search.contains(event.target)) {
//     text_input.blur();
//     originPlaceholder();
//     // Display none shopper login form
//     shopper_login.style.display = "none";

//     //Check value input to change search placeholder text
//     if (text_input.value.trim().length != 0) {
//       zoom_placeholder.style.fontSize = "0.8rem";
//       btn_close_to_del.style.display = "flex";
//     } else {
//       zoom_placeholder.style.transform = "translateY(+.75rem)";
//       zoom_placeholder.style.fontSize = "1rem";

//       text_input.value = ""; //delete whitespace to mouse pointer returns to the first position
//       btn_close_to_del.style.display = "none";
//     }
//   }
// };
//click login/signup to open form login
function click_to_login() {
  shopper_login.style.display = "flex";
  // originPlaceholder();
  zoom_placeholder.style.transform = "translateY(+.75rem)";
  zoom_placeholder.style.fontSize = "1rem";
  //Hide scrollbar when open form login
  document.querySelector("body").style.overflow = "hidden";
}

//click icon x (close) to close form shopper_login/signup
function click_to_close() {
  shopper_login.style.display = "none";
}
//click anywhere to close search list and login form
window.addEventListener("click", function(e) {
  if (!search.contains(event.target)) {
    text_input.blur();
    originPlaceholder();
    // Display none shopper login form
    // shopper_login.style.display = "none";

    //Check value input to change search placeholder text
    if (text_input.value.trim().length != 0) {
      zoom_placeholder.style.fontSize = "0.8rem";
      btn_close_to_del.style.display = "flex";
    } else {
      zoom_placeholder.style.transform = "translateY(+.75rem)";
      zoom_placeholder.style.fontSize = "1rem";

      text_input.value = ""; //delete whitespace to mouse pointer returns to the first position
      btn_close_to_del.style.display = "none";
    }
  }

  const shopper_login = document.querySelector(".shopper-login");
  const shopper_login_item = document.querySelector(".shopper-login__item");
  if (
    shopper_login.contains(e.target) &&
    !shopper_login_item.contains(e.target)
  ) {
    shopper_login.style.display = "none";
    //open scrollbar
    document.querySelector("body").style.overflow = "auto";
  }
});
// LOGIN FACEBOOK
// function statusChangeCallback(response) {
//   // Called with the results from FB.getLoginStatus().
//   console.log("statusChangeCallback");
//   console.log(response); // The current login status of the person.
//   if (response.status === "connected") {
//     // Logged into your webpage and Facebook.
//     testAPI();
//   } else {
//     // Not logged into your webpage or we are unable to tell.
//     document.getElementById("status").innerHTML =
//       "Please log " + "into this webpage.";
//   }
// }

// function checkLoginState() {
//   // Called when a person is finished with the Login Button.
//   FB.getLoginStatus(function(response) {
//     // See the onlogin handler
//     statusChangeCallback(response);
//   });
// }

// window.fbAsyncInit = function() {
//   FB.init({
//     appId: "348954673172738",
//     cookie: true, // Enable cookies to allow the server to access the session.
//     xfbml: true, // Parse social plugins on this webpage.
//     version: "v3.2" // Use this Graph API version for this call.
//   });

//   FB.getLoginStatus(function(response) {
//     // Called after the JS SDK has been initialized.
//     statusChangeCallback(response); // Returns the login status.
//   });
// };

// function testAPI() {
//   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
//   console.log("Welcome!  Fetching your information.... ");
//   FB.api("/me", function(response) {
//     console.log("Successful login for: " + response.name);
//     document.getElementById("status").innerHTML =
//       "Thanks for logging in, " + response.name + "!";
//   });
// }
// function fb_login() {
//   FB.login(
//     function(response) {
//       if (response.authResponse) {
//         console.log("Welcome!  Fetching your information.... ");
//         //console.log(response); // dump complete info
//         access_token = response.authResponse.accessToken; //get access token
//         user_id = response.authResponse.userID; //get FB UID

//         FB.api("/me", function(response) {
//           user_email = response.email; //get user email
//           // you can store this data into your database
//         });
//       } else {
//         //user hit cancel button
//         console.log("User cancelled login or did not fully authorize.");
//       }
//     },
//     {
//       scope: "public_profile,email"
//     }
//   );
//   document.getElementById("login").addEventListener(
//     "click",
//     function() {
//       //do the login
//       FB.login(statusChangeCallback, {
//         scope: "email,public_profile",
//         return_scopes: true
//       });
//     },
//     false
//   );
// }

// slideshow
// var slideIndex = 1;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("dot");
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;

//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
// // end slideshow

// // back to top
// function topFunction() {
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

//select-box option
//Nếu click vào custom-select-wrapper

// //option = all custom-option
// for (const option of document.querySelectorAll(".select-box-option")) {
//   //nếu click option
//   option.addEventListener("click", function() {
//     //this trong Event Handlers là phần tử nhận event. ở đây là phần tử nhận click ở trên
//     // nếu phân tử được click không chứa "select"
//     if (!this.classList.contains("selected")) {
//       // remove selected đang chọn trước đó
//       document
//         .querySelector(".select-box-option.selected")
//         .classList.remove("selected");
//       // add class selected vào phần tử được click
//       this.classList.add("selected");

//       //trả về
//       this.closest(".custom-select").querySelector(
//         ".select-box__trigger span"
//       ).textContent = this.textContent;
//     }
//   });
// }
var box_language = ".box-language";
var cus_language = ".custom-select-box-language";
var box_currency = ".box-currency";
var cus_currency = ".custom-select-box-currency";

chooseOptionBox(box_language, cus_language);
chooseOptionBox(box_currency, cus_currency);

// document.querySelector(".box_2").addEventListener("click", function() {
//   //open custom-select. toggle ở đây để đổi custom-select thành custom-select open
//   this.querySelector(".custom-select").classList.toggle("open");
// });

function chooseOptionBox(box, custom_select) {
  document.querySelector(box).addEventListener("click", function() {
    //open custom-select. toggle ở đây để đổi custom-select thành custom-select open
    this.querySelector(".custom-select").classList.toggle("open");
  });
  //option = all custom-option
  for (const option of document.querySelectorAll(".select-box-option")) {
    //nếu click option
    option.addEventListener("click", function() {
      //this trong Event Handlers là phần tử nhận event. ở đây là phần tử nhận click ở trên
      // nếu phân tử được click không chứa "select"
      if (!this.classList.contains("selected")) {
        // remove selected đang chọn trước đó
        //phải dùng this, hạn chế xài document
        this.parentNode
          .querySelector(".select-box-option.selected")
          .classList.remove("selected");
        // add class selected vào phần tử được click
        this.classList.add("selected");
        //trả về
        this.closest(".custom-select").querySelector(
          ".select-box__trigger span"
        ).textContent = this.textContent;
      }
    });
  }
  window.addEventListener("click", function(e) {
    const select = document.querySelector(custom_select);
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });
}

// Product Detail
// Product Detail change color
// document.querySelector(".product-detail-color__item--rounded").addEventListener("click", function(){
//   this.parentNode
//     .
// })
document
  .querySelector(".product-detail-color__item--rounded")
  .classList.add("selected-color");
for (const listColor of document.querySelectorAll(
  ".product-detail-color__item--rounded"
)) {
  listColor.addEventListener("click", function() {
    if (!this.classList.contains("selected-color")) {
      this.parentNode
        .querySelector(".product-detail-color__item--rounded.selected-color")
        .classList.remove("selected-color");
      // document
      //   .querySelector(".product-detail-color__item--rounded.selected-color")
      //   .classList.remove("selected-color");

      this.classList.add("selected-color");
      document.querySelector(
        ".product-detail-color__name"
      ).innerText = this.querySelector(
        ".product-detail-color__item span"
      ).innerText;
    }
  });
}
// document
//   .querySelector(".product-detail__thumb");
// Hover to change image
document
  .querySelector(".product-detail__thumb")
  .classList.add("selected-thumb");
var myimage = document.getElementById("myimage");
for (const listImage of document.querySelectorAll(".product-detail__thumb")) {
  listImage.addEventListener("mouseout", function() {
    {
      myimage.src = document.querySelector(".selected-thumb img").src;
    }
  });
  listImage.addEventListener("mouseover", function() {
    {
      if (this.classList.contains("product-detail__thumb-before")) {
        myimage.src = "img/regular-before.jpg";
      } else {
        myimage.src = "img/regular-after.jpg";
      }
    }
  });
  listImage.addEventListener("click", function() {
    // if (this.classList.contains("product-detail__thumb-before")) {
    //   myimage.src = "img/regular-before.jpg";
    // } else {
    //   myimage.src = "img/regular-after.jpg";
    // }
    if (!this.classList.contains("selected-thumb")) {
      this.parentNode
        .querySelector(".selected-thumb")
        .classList.remove("selected-thumb");
      // document
      //   .querySelector(".product-detail-color__item--rounded.selected-color")
      //   .classList.remove("selected-color");

      this.classList.add("selected-thumb");
    }
  });
}

//Image zoom when mouseover
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  lens = document.querySelector(".img-zoom-lens");
  /*create lens:*/
  // lens = document.createElement("DIV");
  // lens.setAttribute("class", "img-zoom-lens");
  // /*insert lens:*/
  // img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + "px " + img.height * cy + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

// const image = document.querySelector(".product-detail__regular");
//   img_zoom_lens = document.querySelector(".img-zoom-lens");
//   // img_zoom_result = document.querySelector(".img-zoom-result");
// image.addEventListener("mouseover", function() {
//     img_zoom_lens.style.visibility = "visible";
//     // img_zoom_result.style.visibility = "visible";
//   imageZoom("myimage", "myresult");
// })

// image.addEventListener("mouseout", function() {

//   img_zoom_lens.style.visibility = "hidden";
//   // img_zoom_result.style.visibility = "hidden";
//   // if (!image.contains(e.target)) {
//   //   // document.getElementById("myimage").remove("img-zoom-lens");
//   //   // img.remove("img-zoom-lens");
//   //   // // console.log(imgID.remove("img-zoom-lens"));
//   //   // result.remove("img-zoom-result");
//   //   // img_zoom_lens.style.display = "none";
//   //   // img_zoom_result.style.display = "none";
//   // }
//   // else{
//   // }
// });
// function show(){
//   imageZoom("myimage", "myresult");
// }

// const image = document.querySelector(".product-detail__regular");
// image.addEventListener("mouseover", function() {
//   document.querySelector(".img-zoom-lens").style.visibility = "visible";
//   imageZoom("myimage", "myresult");
// });

// function show() {

//   // document.querySelector(".img-zoom-lens").style.visibility = "visible";
// }

// image.addEventListener("mouseout", function(){
//   hide();
// })
// function hide() {
//   document.querySelector(".img-zoom-lens").style.visibility = "hidden";
// }

const image = document.getElementById("myimage");
image.addEventListener("mouseenter", function() {
  // console.log(imageZoom("myimage", "myresult").length);
  document.querySelector(".img-zoom-lens").style.display = "block";
  document.querySelector(".img-zoom-result").style.display = "block";
  imageZoom("myimage", "myresult");
});
image.addEventListener("mouseleave", function() {
  document.querySelector(".img-zoom-result").style.display = "none";
  // document.querySelector(".img-zoom-lens").style.visibility = "visible";
  document.querySelector(".img-zoom-lens").style.display = "none";
  // document.querySelector(".img-zoom-lens").remove(); // remove when mouseleave. Avoid duplicate call function imageZoom.
});
