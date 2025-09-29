console.log("hej fra JS");
const productContainer = document.querySelector(".product_container");
getData("https://kea-alt-del.dk/t7/api/products?subcategory=Perfumes");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);

    // let soldOutClass = "";
    // if (product.soldout === 1) {
    //   soldOutClass = "soldOut";
    // }

    productContainer.innerHTML += `   <div class="produkt1 ${product.soldout === 1 ? "soldout" : ""}"> 


<div class = "imageContainer">
                <li> <a href="produkt.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"

                            alt="Hvid hoodie"></a></li>
<p>SOLD OUT</p>
</div>
                <h4>${product.productdisplayname}</h4>
                <h3>${product.usagetype}</h3>
<p>${product.price} kr.</p>
  

  
  
  </div>`;
  });
}