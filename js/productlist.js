// Hvis du kan, så send et parmeter fra kategorisiden til productlist,
// så productlist ved hvordan den skal filtrere produkter
// (det er noget med at den henter produkter a la
// https://kea-alt-del.dk/t7/api/products?brandname=Nike )


// https://kea-alt-del.dk/t7/api/products?limit=10&categories=apparel

 const urlParams = new URLSearchParams(window.location.search);
// const categoryId = urlParams.get("category");

// fetch(`https://kea-alt-del.dk/t7/api/categories/` + categoryId)
//   .then((res) => res.json())
//   .then((data) => showCategory(data));

// function showCategory(category) {
//   console.log("category");


//   document.querySelectorAll("main .product-list-title").forEach(function (element) {
//     element.textContent = category.categories;
//   });
// }

const categoryName = decodeURIComponent(urlParams.get("category"));

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((categories) => {
    const category = categories.find((cat) => cat.category === categoryName);
    if (category) {
      document.querySelector(".product-list-title").textContent = category.category;
    } else {
      console.error("Category not found");
    }
  });

///// products

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#small-product-template").content;
  //lav en kopi
  
  const copy = template.cloneNode(true);
  //ændre indhold

  copy
    .querySelector(".see-product")
    .setAttribute("href", `product.html?id=${product.id}`);

  let fullPrice = product.price;
  let discountPercentage = product.discount;

  // Calculate the discounted price
  let discountedPrice = fullPrice - fullPrice * (discountPercentage / 100);

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector(".discounted p:last-child").textContent =
    product.discount + "%";
  copy.querySelector(".discounted p:first-child").textContent =
    discountedPrice.toFixed() + " DKK";

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sold-out");
  }

  if (product.discount) {
    //produktet er på sale
    copy.querySelector("article").classList.add("on-sale");
  }

  //appende
  document.querySelector("main").appendChild(copy);
}
