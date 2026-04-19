# GlowCare Skin Care Website

## Overview

GlowCare is a professional skin care products website developed using **Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript**. It is designed with a modern and attractive user interface where users can browse skin care products, view prices in Indian Rupees, and manage their shopping cart easily.

## Features

* Attractive and responsive homepage
* Separate Shop page for all products
* Product cards with images
* Prices in Indian Rupees (₹)
* Add to Cart functionality
* Remove from Cart functionality
* Live cart total updates
* Cart item count in navigation bar
* Professional UI design
* Responsive for desktop and mobile devices

## Product Categories

* Serum
* Moisturizer
* Sunscreen
* Toner
* Fairness Cream
* Sheet Masks

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Storage

* LocalStorage (for cart data)

## Project Structure

```bash id="u52sr7"
Assignment_No.7/
│── server.js
│── package.json
│── models/
│   └── Product.js
│── public/
│   ├── index.html
│   ├── shop.html
│   ├── cart.html
│   ├── style.css
│   └── script.js
```

## Installation Steps

1. Open the project folder in terminal.
2. Install dependencies:

```bash id="jkh20g"
npm install
```

3. Start the server:

```bash id="6gwj0u"
node server.js
```

4. Open browser and visit:

```bash id="w85m2l"
http://localhost:5000
```

5. (Optional) Seed product data:

```bash id="8l3t0f"
http://localhost:5000/seed
```

## How to Use

1. Open the homepage.
2. Click **Shop Now**.
3. Browse products.
4. Click **Add to Cart** on any product.
5. Open Cart page.
6. Remove products or view total price.

## Future Enhancements

* User Login / Signup
* Checkout Page
* Online Payment Gateway
* Search and Filter Products
* Admin Dashboard
* Wishlist
* Order History

## Author

Created as **Assignment No. 7 - Skin Care Products Website Project**.
