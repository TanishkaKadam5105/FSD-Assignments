const grid = document.getElementById("productGrid");
const search = document.getElementById("search");

function displayProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

displayProducts(products);

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.id === id);

  if (item) item.qty++;
  else cart.push({ id, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function filterCategory(cat) {
  if (cat === "all") displayProducts(products);
  else displayProducts(products.filter(p => p.category === cat));
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(value)));
});
