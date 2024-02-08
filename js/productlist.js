const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const categoryTitle = urlParams.get("productlist")

document.querySelector("h2").textContent = category;

// fetch databasen til products, fordi vi vill först se alle producter på listen

// fetch("https://kea-alt-del.dk/t7/api/products?limit=12")
//   .then((res) => res.json())
//   .then(showProducts);

// lave om til IF-statement

if (category) {
  fetch("https://kea-alt-del.dk/t7/api/products?limit=12&category=" + category)
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products?limit=12")
  .then((res) => res.json())
    .then(showProducts);
}

// definiere hvordan mine produkter vil vise frem
// dette er at loope/kalde funktionen
// når alt er i en parantesis (showProduct) så kalder vi en (ny) funktion
function showProducts(products) {
  products.forEach(showProduct);
}

// singular product
function showProduct(product) {
  // GLÖM INTE content, då allt inne i template ska med!
  // hvor kommer konstant fra? HTML-filen! :)
  const template = document.querySelector("template").content;

  // kopier/kloner template og fylder den med data vi har hentet
  const copy = template.cloneNode(true);

  // dags att fylla innehållet in till template
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // pris och discount
  copy.querySelector(".price").textContent = product.price + " DKK";

  // if-statement, om den är på rea
  if (product.soldout) {
    //kan kun kopier klasse hvis den ikke er 0/null
    //produktet er udsolgt
    copy.querySelector("article").classList.add("sold-out");
  }

  if (product.discount) {
    //kan kun kopier klasse hvis den ikke er 0/null
    //produktet er på sale
    let fullPrice = product.price;
    let discountPercentage = product.discount;

    let discountedPrice = fullPrice - fullPrice * (discountPercentage / 100);
    copy.querySelector("article").classList.add("on-sale");

    copy.querySelector(".discounted p:first-child").textContent =
      discountedPrice.toFixed() + " DKK";

    copy.querySelector(".discounted p:last-child").textContent =
      product.discount + "%";
  }

// Visa produkten när man trycker på den från produktlistan
copy.querySelector(".see-product").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}

/* <template id="small-product-template">  
   <h2 class="product-list-title">Product title</h2>    
        <article class="small-product">
          <a href="product.html" class="see-product">
        <h3>Black Fleece Jacket</h3>
       <img src="https://kea-alt-del.dk/t7/images/webp/640/1528.webp" alt="Produktbild" />
        <p class="price"><span></span>1234</p>
        <div class="discounted">
          <p></p>
          <p></p>
        </div>
      </a>
    </article>
  </template> */

//   "id": 1163,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Summer",
//   "productionyear": 2011,
//   "usagetype": "Sports",
//   "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//   "price": 895,
//   "discount": null,
//   "brandname": "Nike",
//   "soldout": 0
