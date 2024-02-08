// // https://kea-alt-del.dk/t7/api/products/

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log("show product data");

  document.querySelectorAll("main .product-title").forEach(function (element) {
    element.textContent = product.productdisplayname;
  });

  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector(".item-description").innerHTML = product.description;

  document.querySelector(".basecolour").textContent = product.basecolour

  document.querySelectorAll(".brand-name").forEach(function (element) {
    element.textContent = product.brandname});

document.querySelector(".brandbio").textContent = product.brandbio;

}

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");

// fetch("https://kea-alt-del.dk/t7/api/products/" + id)
//   .then((response) => response.json())
//   .then((data) => showProduct(data));

// function showProduct(product) {
//   console.log(product);

//   //fang template
//   const template = document.querySelector(".product-template");
//   const templateContent = template.content;

//   const copy = templateContent.cloneNode(true);

//   //ændre indhold

//   // shows price
//   let fullPrice = product.price;
//   let discountPercentage = product.discount;
//   // calculate the discounted price
//   let discountedPrice = fullPrice - fullPrice * (discountPercentage / 100);

//   // document.querySelectorAll("main .product-title").forEach(function (element) {
//   //   element.textContent = product.productdisplayname;
//   // });
//   copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

//   // copy.querySelector(".basecolour").textContent = product.basecolour;

//   // copy.querySelectorAll(".brand-name").textContent = product.brandname;

//   // copy.querySelector(".brandbio").textContent = product.brandbio;

//   // // Update element with class "item-description"
//   copy.querySelector(".item-description").innerHTML = product.description;

//   copy.querySelector(".price").textContent = product.price;

//   copy.querySelector(".discounted-price p:last-child").textContent = product.discount + "%";

//   copy.querySelector(".discounted-price p:first-child").textContent = discountedPrice.toFixed();

//   // //appende
//    document.querySelector("main").appendChild(copy);

//   document.querySelectorAll("main .product-title").forEach(function (element) {
//     element.textContent = product.productdisplayname;
//   });

//   document.querySelectorAll("main .brand-name").forEach(function (element) {
//     element.textContent = product.brandname;
//   });

//   // document.querySelector(".price").textContent = product.price;

//   // document.querySelector(
//   //   "img"
//   // ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

//   document.querySelectorAll(".basecolour").forEach(function (element) {
//     element.textContent = product.basecolour;
//   });

//   document.querySelectorAll(".brandbio").forEach(function (element) {
//     element.textContent = product.brandbio;
//   });

//   // Update element with class "item-description"
//   // document.querySelector(".item-description").textContent = product.description;

//   // copy.querySelector(".discounted-product p:last-child").textContent =
//   //   product.discount + "%";

//   // copy.querySelector(".discounted-product p:first-child").textContent =
//   //   discountedPrice.toFixed();

//   //appende
//   document.querySelector(".product-template").appendChild(copy);
// }
