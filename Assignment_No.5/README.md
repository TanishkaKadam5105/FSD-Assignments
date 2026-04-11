# Assignment No. 5  
## Portfolio Website using Node.js, Express and MongoDB

## Student Information
- Name: Tanishka Kadam
- Course: BTech Computer Engineering
- College: Pimpri Chinchwad College of Engineering

---

# Project Title
Personal Portfolio Website using Node.js, Express and MongoDB

---

# Objective
To develop a functional portfolio website using Node.js and Express framework with MongoDB database integration to store contact form data.

---

# Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS

---

# Project Description
This project is a responsive personal portfolio website created to showcase profile details, skills, projects, internships and contact information.

The frontend is designed using HTML, CSS and JavaScript.  
The backend is developed using Node.js and Express.js.  
MongoDB database is connected using Mongoose to store user contact form submissions.

When a visitor fills the contact form, the entered name, email and message are saved in the MongoDB database.

---

# Features
- Responsive portfolio design
- About section
- Skills section
- Projects section
- Experience section
- Contact section
- Contact form with database storage
- Automatic browser opening on server start
- Clean modern UI

---

# Folder Structure
portfolio-node/
│── app.js
│── package.json
│── README.md
│
├── views/
│   └── index.ejs
│
└── public/
    └── images/

---

# Installation Steps

## Step 1: Create Project Folder
Create a folder named:

portfolio-node

## Step 2: Open Terminal
Open terminal inside the project folder.

## Step 3: Initialize Node Project
npm init -y

## Step 4: Install Required Packages
npm install express ejs mongoose open

## Step 5: Create Files
- app.js
- views/index.ejs
- public/images

## Step 6: Add Code
Paste backend code in app.js and portfolio code in index.ejs

## Step 7: Start MongoDB
Open MongoDB Compass or MongoDB Service.

## Step 8: Run Project
node app.js

## Step 9: Open Browser
http://localhost:3000

---

# Database Details
- Database Name: portfolioDB
- Collection Name: contacts

Stored Fields:
- name
- email
- message

---

# Output
The portfolio website opens in browser and stores contact form submissions in MongoDB successfully.

---

# Conclusion
This project helped in understanding full stack web development using Node.js, Express and MongoDB. It demonstrates frontend design with backend integration and database connectivity.

---

# Result
Successfully created a functional portfolio website using Node.js, Express and MongoDB.