function loadCount(){let c=JSON.parse(localStorage.getItem('cart')||'[]');let el=document.getElementById('count');if(el)el.innerText='('+c.length+')';}
fetch('/products').then(r=>r.json()).then(data=>{
 const box=document.getElementById('products'); if(!box) return; 
 box.innerHTML=data.map(p=>`<div class='card'><img src='${p.image}'><h3>${p.name}</h3><p>${p.category}</p><h4>₹${p.price}</h4><button onclick='addCart(${JSON.stringify(p)})'>Add to Cart</button></div>`).join('');
 loadCount();
});
function addCart(p){let c=JSON.parse(localStorage.getItem('cart')||'[]');c.push(p);localStorage.setItem('cart',JSON.stringify(c));loadCount();alert('Added to cart');}