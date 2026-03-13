const cartDiv = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cartDiv.innerHTML = "";

cart.forEach(item => {
  const p = products.find(pr => pr.id === item.id);
  total += p.price * item.qty;

  cartDiv.innerHTML += `
    <div>
      <h4>${p.name}</h4>
      <p>₹${p.price} x ${item.qty}</p>
      <button onclick="removeItem(${item.id})">Remove</button>
    </div>
  `;
});

totalDiv.innerText = "Total: ₹" + total;

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
