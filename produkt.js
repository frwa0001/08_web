console.log("produkt.js loaded ✨");

const id = new URLSearchParams(window.location.search).get("id");
const productUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;

const productcontainer = document.querySelector(".single_product");

function getData() {
  fetch(productUrl)
    .then(res => res.json())
    .then(data => show(data));
}
getData();

function show(data) {
  console.log("Produkt data:", data);

  const descriptionArr = data.description ? data.description.split("\n") : [];

  productcontainer.innerHTML = `
    <article class="produkt-detalje">
      <div class="billede">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" 
             alt="${data.productdisplayname}">
      </div>
      
      <div class="tekst">
        <h2>${data.productdisplayname}</h2>
        <h3>${data.brandname}</h3>
        
        <ul class="beskrivelse">
          ${descriptionArr.map(line => `<li>${line}</li>`).join("")}
        </ul>

        <div class="rating">
          &starf;&starf;&star;&star;&star;<span>(23)</span>
        </div>

        <h4 class="pris">${data.price} kr.</h4>

        <button class="str knapper">One size</button>
        <button class="add-to-cart knapper">Læg i kurv</button>
        <button class="favorite-button knapper">&#9825;</button>
      </div>
    </article>
  `;
}


