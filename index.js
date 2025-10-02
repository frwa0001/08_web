console.log("Index.js loaded ✨");

const categoriesUrl = "https://kea-alt-del.dk/t7/api/categories";
const categoryListContainer = document.querySelector(".category_list_container");

function getData() {
  fetch(categoriesUrl)
    .then(res => res.json())
    .then(data => showCategories(data));
}

function showCategories(categories) {
  categoryListContainer.innerHTML = "";

  categories.forEach(category => {
    categoryListContainer.innerHTML += `
      <a class="knap" href="produktliste.html?category=${category.category}">
        ${category.category}
      </a>
    `;
  });
}

getData();
