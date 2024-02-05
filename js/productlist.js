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

  let fullPrice = product.price;
  let discountPercentage = product.discount;

  // Calculate the discounted price
  let discountedPrice = fullPrice - fullPrice * (discountPercentage / 100);

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".discounted p:last-child").textContent =
    product.discount + "%";
  copy.querySelector(".discounted p:first-child").textContent =
    discountedPrice.toFixed();

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sold-out");
  }

  if (product.discount) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("on-sale");
  }

  //appende
  document.querySelector("main").appendChild(copy);
}
