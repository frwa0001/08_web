console.log("Produktliste.js loaded ✨");

const category = new URLSearchParams(window.location.search).get("category");
const url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;

const productContainer = document.querySelector(".product_container");
let allData = [];

function getData(url) {
  console.log("Henter data...");
  fetch(url)
    .then(res => res.json())
    .then(data => {
      allData = data;
      showProducts(data);
    });
}
getData(url);

document.querySelectorAll(".buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.season;
    if (filter === "All") {
      showProducts(allData);
    } else {
      const filtered = allData.filter(p => p.season === filter);
      showProducts(filtered);
    }
  });
});

function showProducts(products) {
  productContainer.innerHTML = "";

  products.forEach(product => {
    let discountHTML = "";
    if (product.discount) {
      const newPrice = product.price - (product.price * product.discount) / 100;
      discountHTML = `
        <div class="discounted_container">
          <p>Now DKK <span>${newPrice}</span>,-</p>
          <p>${product.discount}%</p>
        </div>
      `;
    }

    productContainer.innerHTML += `
      <article class="produkt 
                      ${product.soldout === 1 ? "soldout" : ""} 
                      ${product.discount ? "discount" : ""}">
        
        <div class="imageContainer">
          <a href="produkt.html?id=${product.id}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                 alt="${product.productdisplayname}">
          </a>
          ${product.soldout === 1 ? "<p>SOLD OUT</p>" : ""}
        </div>
        
        <h4>${product.brandname}</h4>
        <h3>${product.productdisplayname}</h3>
        <p class="price">DKK ${product.price},-</p>
        ${discountHTML}
      </article>
    `;
  });
}

