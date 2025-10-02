console.log("product loadet");

const categories = "https://kea-alt-del.dk/t7/api/categories";

const category_list_container = document.querySelector(".category_list_container");

function getData() {
  console.log("getdata");
  fetch(categories).then((res) => res.json().then((data) => showCategory(data)));
}

function showCategory(categories) {
  console.log("categories: ", categories);
  categories.forEach((category) => {
    console.log("categories", categories);

    category_list_container.innerHTML += `

  <a class="knap" href="produktliste.html?category=${category.category}">
    ${category.category}
  </a>

`;
  });
}
getData();