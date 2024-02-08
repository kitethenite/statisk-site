// https://kea-alt-del.dk/t7/api/categories

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  //looper og kalder showCategory
  categories.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);

  // Catch that template

  const template = document.querySelector("template").content;

  //viktigt att skriva const clone innan cloneNode!
  const clone = template.cloneNode(true);

  // få fatt och skifta innehåll

clone.querySelector("a").textContent = category.category
clone.querySelector("a").href=`productlist.html?category=${category.category}`;

document.querySelector("main").appendChild(clone);


}

{
  /* <main>
      <template id="category-template">
      <div class="brand-list">
        <ol>
          <li id="category-id"><a href="productlist.html">Accessories</a></li>
        </ol>
      </div>
    </template>
    </main> */
}

// function showCategory(category) {
//     console.log(category);

//     // // catch the template
//     // const template = document.querySelector("#category-template").content;

//     // // making a copy
//     // const copy = template.cloneNode(true);

//     // // change the content
//     // // copy.querySelector("li a").setAttribute("href", `categories.html?`)

//     // copy.querySelector(".brand-list ol li a").textContent = category.category

//     // document.querySelector("main").appendChild(copy);

//     const template = document.querySelector("#category-template").content.cloneNode(true);
//     const categoryLink = template.querySelector(".brand-list ol li a");
//     categoryLink.textContent = category.category;
//     categoryLink.href = `productlist.html?category=${encodeURIComponent(category.category)}`; // Pass category name as query parameter
//     document.querySelector("main").appendChild(template);

// }
