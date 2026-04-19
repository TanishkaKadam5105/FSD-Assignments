const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Product=require('./models/Product');
const app=express();
app.use(express.json()); app.use(cors()); app.use(express.static('public'));
mongoose.connect('mongodb://127.0.0.1:27017/skincare');
app.get('/seed', async(req,res)=>{
 await Product.deleteMany();
 await Product.insertMany([
 {name:'Vitamin C Serum',price:699,category:'Serum',image:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600'},
 {name:'Hydrating Face Wash',price:399,category:'Cleanser',image:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600'},
 {name:'Daily Moisturizer',price:549,category:'Cream',image:'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600'},
 {name:'Sunscreen SPF 50',price:599,category:'Protection',image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600'},
 {name:'Night Repair Cream',price:799,category:'Night Care',image:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600'},
 {name:'Aloe Face Mask',price:499,category:'Mask',image:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600'}
 ]); res.send('Seeded');
});
app.get('/products', async(req,res)=>res.json(await Product.find()));
app.listen(5000,()=>console.log('http://localhost:5000'));