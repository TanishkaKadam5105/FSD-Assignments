document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Payment Successful!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
