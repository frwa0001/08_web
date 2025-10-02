console.log("product loadet");

// const id = 1581;
const id = new URLSearchParams(window.location.search).get("id");
const productUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;

// const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
// const productcontainer = document.querySelector("#productcontainer");

console.log("product", productUrl);

//get the data
function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data er", data);

  productcontainer.innerHTML = `
  <div class="billede">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}">
  </div>
  <div class="tekst">
    <h2>${data.productdisplayname}</h2>
    <h3>${data.brandname}</h3>
    <p class="beskrivelse">${data.description}</p>
      <div class="rating">
    &starf;&starf;&star;&star;&star;<span>(23)</span>
     </div>
    <h4 class="pris">${data.price} kr.</h4>
    <button class="str knapper">one size</button>
    <button class="add-to-cart knapper">Læg i indkøbskurv</button>
    <button class="favorite-button knapper">&#9825;</button>
  </div>
`;
}
getData();