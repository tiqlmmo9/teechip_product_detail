// Product Detail
// Product Detail change color
// document.querySelector(".product-detail-color__item--rounded").addEventListener("click", function(){
//   this.parentNode
//     .
// })

var listProductDetail = [
  {
    id: 1,
    nameProduct: "Premium Fit Mens Tee",
    imageProduct: ["img/regular-before.jpg", "img/regular-after.jpg"],
    priceProduct: "$28.95",
    colorProduct: ["Navy", "White", "Black", "Purple"],
    sizeProduct: ["X", "S", "M", "L"],
    Qty: 10
  },
  {
    id: 2,
    nameProduct: "Unisex Tank",
    imageProduct: ["img/unisex-tank_before.jpg", "img/unisex-tank_after.jpg"],
    priceProduct: "$24.95",
    colorProduct: ["Navy", "White", "Black"],
    sizeProduct: ["X", "S", "M", "L", "XL", "2XL"],
    Qty: 15
  }
];
listProductDetail.forEach(function insertProductDetail(prod) {
  // console.log(prod.imageProduct);
  document.querySelector(".product-detail-select__list").innerHTML +=
    '<div class="product-detail-select__item">                            <img src="' +
    prod.imageProduct[0] +
    '" alt="">                            <span>' +
    prod.nameProduct +
    "</span>                        </div>";

  // document.querySelector(".product-detail__item").innerHTML +=
  //   '<div class="product-detail__thumb product-detail__thumb-before">                    <img src="' +
  //   prod.imageProduct[0] +
  //   '" alt="">                </div>                <div class="product-detail__thumb product-detail__thumb-after">                    <img src="' +
  //   prod.imageProduct[1] +
  //   '" alt="">                </div>';
});

document
  .querySelector(".product-detail-select__item")
  .classList.add("selected-product");

for (const listProduct of document.querySelectorAll(
  ".product-detail-select__item"
)) {
  listProduct.addEventListener("click", function() {
    if (!this.classList.contains("selected-product")) {
      this.parentNode
        .querySelector(".selected-product")
        .classList.remove("selected-product");
      this.classList.add("selected-product");
    }
    //Avoid duplicate colors
    document.querySelector(".product-detail-color__list").innerHTML = "";
    //Avoid duplicate size
    document.querySelector(".product-detail-size__list").innerHTML = "";
    //Avoid duplicate qty
    document.querySelector(".product-detail-qty-box__select-box").innerHTML =
      "";
    insertProduct();
    // document
    //   .querySelector(".product-detail-qty__box")
    //   .addEventListener("click", function() {
    //     document
    //       .querySelector(".product-detail-qty__box")
    //       .classList.toggle("open-qty");
    //   });
    changeQty();
    changeThumb();
  });
}
//insert thumb  first load
insertProduct();
// console.log(listProductDetail[0].imageProduct[0]);
var myimage = document.getElementById("myimage");
function insertProduct() {
  listProductDetail.forEach(function insertProductDetail(item, index, arr) {
    if (
      document.querySelector(".selected-product img").getAttribute("src") ==
      arr[index].imageProduct[0]
    ) {
      //Change thumb image
      document.querySelector(".product-detail__item").innerHTML =
        '<div class="product-detail__thumb product-detail__thumb-before">                    <img src="' +
        arr[index].imageProduct[0] +
        '" alt="">                </div>                <div class="product-detail__thumb product-detail__thumb-after">                    <img src="' +
        arr[index].imageProduct[1] +
        '" alt="">                </div>';
      //Change zoom image
      document.getElementById("myimage").src = document.querySelector(
        ".selected-product img"
      ).src;
      //Change name
      document.querySelector(".product-detail__name").innerText =
        arr[index].nameProduct;
      //Change price
      document.querySelector(".product-detail__price").innerText =
        arr[index].priceProduct;

      //Change color
      // console.log(arr[index].colorProduct);
      arr[index].colorProduct.forEach(function insertColorProduct(color) {
        document.querySelector(".product-detail-color__list").innerHTML +=
          '<div class="product-detail-color__item--rounded">                            <div class="product-detail-color__item product-detail-color__item--' +
          color.toLowerCase() +
          '">                                <span>' +
          color +
          "</span>                            </div>";
      });

      //Change size
      arr[index].sizeProduct.forEach(function insertColorProduct(size) {
        document.querySelector(".product-detail-size__list").innerHTML +=
          '<div class="product-detail-size__item">                            ' +
          size +
          "                        </div>";
      });

      //Change qty

      for (var i = 1; i <= arr[index].Qty; i++) {
        document.querySelector(
          ".product-detail-qty-box__select-box"
        ).innerHTML +=
          '<div class="product-detail-qty-box__item">' + i + "</div>";
      }

      //Change slide
      arr[index].imageProduct.forEach(function changeSlide(sli) {
        // console.log(images = sli);
        var i = 0;
        // console.log(arr[index].imageProduct.length);
        document
          .querySelector(".product-detail__swipe-btn--left")
          .addEventListener("click", function() {
            if (i <= 0) i = arr[index].imageProduct.length;
            i--;
            console.log(i);
            setThumb(i);
            // return setImg();
          });
        document
          .querySelector(".product-detail__swipe-btn--right")
          .addEventListener("click", function() {
            if (i >= arr[index].imageProduct.length - 1) i = -1;
            i++;
            setThumb(i);
            // return setImg();
          });
        // function setImg() {
        //   return myimage.setAttribute("src", sli);
        // }
        function setThumb(i) {
          document
            .querySelector(".product-detail__item")
            .querySelector(".selected-thumb")
            .classList.remove("selected-thumb");
          document
            .querySelectorAll(".product-detail__thumb")
            [i].classList.add("selected-thumb");
            myimage.src = document.querySelector(".selected-thumb img").src;
        }
      });
    }
  });
}
// for (var i = 0; i < listProductDetail.length; i++) {
//   for (j = 0; j < listProductDetail[i].imageProduct[j]; j++) {
//     if (
//       document.querySelector(".selected-product img").getAttribute("src") ==
//       listProductDetail[i].imageProduct[j]
//     ) {
//       document.querySelector(".product-detail__item").innerHTML +=
//         '<div class="product-detail__thumb product-detail__thumb-before">                    <img src="' +
//         listProductDetail[i].imageProduct[j] +
//         '" alt="">                </div>                <div class="product-detail__thumb product-detail__thumb-after">                    <img src="' +
//         listProductDetail[i].imageProduct[j] +
//         '" alt="">                </div>';
//     }
//   }
// }
// document.querySelector(".product-detail__item").innerHTML +=
//   '<div class="product-detail__thumb product-detail__thumb-before">                    <img src="' +
//   prod.imageProduct[0] +
//   '" alt="">                </div>                <div class="product-detail__thumb product-detail__thumb-after">                    <img src="' +prod.imageProduct[1] +
//   '" alt="">                </div>';
// document
//   .querySelector(".product-detail__thumb")
//   .classList.add("selected-thumb");
// var myimage = document.getElementById("myimage");
// for (const listImage of document.querySelectorAll(".product-detail__thumb")) {
//   function changeNode() {
//     if (listImage.classList.contains("product-detail__thumb-before")) {
//       document.querySelector(".product-detail__node").innerText = "1/2";
//     }
//     if (listImage.classList.contains("product-detail__thumb-after")) {
//       document.querySelector(".product-detail__node").innerText = "2/2";
//     }
//   }

//   listImage.addEventListener("mouseout", function() {
//     {
//       myimage.src = document.querySelector(".selected-thumb img").src;
//     }
//   });
//   listImage.addEventListener("mouseover", function() {
//     {
//       if (this.classList.contains("product-detail__thumb-before")) {
//         myimage.src = document.querySelectorAll(
//           ".product-detail__thumb img"
//         )[0].src;
//       } else {
//         myimage.src = document.querySelectorAll(
//           ".product-detail__thumb img"
//         )[1].src;
//       }
//       changeNode();
//     }
//   });
//   listImage.addEventListener("click", function() {
//     // if (this.classList.contains("product-detail__thumb-before")) {
//     //   myimage.src = "img/regular-before.jpg";
//     // } else {
//     //   myimage.src = "img/regular-after.jpg";
//     // }
//     if (!this.classList.contains("selected-thumb")) {
//       this.parentNode
//         .querySelector(".selected-thumb")
//         .classList.remove("selected-thumb");
//       // document
//       //   .querySelector(".product-detail-color__item--rounded.selected-color")
//       //   .classList.remove("selected-color");

//       this.classList.add("selected-thumb");
//       myimage.src = document.querySelector(".selected-thumb img").src;
//       changeNode();
//       // console.log(changeNode());
//     }
//   });
// }
// console.log(images);
// Change Qty
changeQty();
function changeQty() {
  document
    .querySelector(".product-detail-qty__box")
    .addEventListener("click", function() {
      console.log(this);
      this.classList.toggle("open-qty");
    });
  document
    .querySelector(".product-detail-qty-box__item")
    .classList.add("qty-selected");

  for (const listQty of document.querySelectorAll(
    ".product-detail-qty-box__item"
  )) {
    listQty.addEventListener("click", function() {
      if (!this.classList.contains("qty-selected")) {
        this.parentNode
          .querySelector(".qty-selected")
          .classList.remove("qty-selected");
        this.classList.add("qty-selected");
        document.querySelector(
          ".product-detail-qty__box span"
        ).innerText = this.textContent;
        document.querySelector(
          ".product-detail-qty__number"
        ).textContent = this.textContent;
      }
    });
  }
}

//
changeThumb();
function changeThumb() {
  document
    .querySelector(".product-detail__thumb")
    .classList.add("selected-thumb");

  for (const listImage of document.querySelectorAll(".product-detail__thumb")) {
    function changeNode() {
      if (listImage.classList.contains("product-detail__thumb-before")) {
        document.querySelector(".product-detail__node").innerText = "1/2";
      }
      if (listImage.classList.contains("product-detail__thumb-after")) {
        document.querySelector(".product-detail__node").innerText = "2/2";
      }
    }

    listImage.addEventListener("mouseout", function() {
      {
        myimage.src = document.querySelector(".selected-thumb img").src;
      }
    });
    listImage.addEventListener("mouseover", function() {
      {
        if (this.classList.contains("product-detail__thumb-before")) {
          myimage.src = document.querySelectorAll(
            ".product-detail__thumb img"
          )[0].src;
        } else {
          myimage.src = document.querySelectorAll(
            ".product-detail__thumb img"
          )[1].src;
        }
        changeNode();
      }
    });
    listImage.addEventListener("click", function() {
      if (!this.classList.contains("selected-thumb")) {
        this.parentNode
          .querySelector(".selected-thumb")
          .classList.remove("selected-thumb");

        this.classList.add("selected-thumb");
        changeNode();
      }
    });
  }
}

//
