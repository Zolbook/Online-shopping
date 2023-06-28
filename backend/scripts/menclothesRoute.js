const express = require('express');
const {menclothes} = require('./db');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', async (req, res)=>{
    try{
        const newMenClothes = [
            {
            category: 'menclothes',
  img: '/men1.jpeg',
  name: "Cucci пиджак",
  price:50000,
mencloth:[{  brand:'Cucci',  category: 'menclothes',
img: '/men1.jpeg',
name: "Cucci пиджак",
price:50000, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
  brand:'Cucci'

   },
  {
    category: 'menclothes',
  img:  '/men10.jpeg',
  name: "пиджак",
  price:  89000,
  mencloth:[{ brand:'Prada',  category: 'menclothes',
  img:  '/men10.jpeg',
  name: "пиджак",
  price:  89000,    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
  brand:'Prada'
  },
  { 
    category: 'menclothes',
    img: '/men11.jpeg',
    name: "Prada цамц",
    price: 36600,
    mencloth:[{  brand:'Prada',
   
    category: 'menclothes',
    img: '/men11.jpeg',
    name: "Prada цамц",
    price: 36600,    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Prada'
 
    },
  { 
    category: 'menclothes',
    img: '/coat.jpeg',
    name: "пальто",
    price: 90000,
    mencloth:[{    brand:'Mavy',
  
    category: 'menclothes',
    img: '/coat.jpeg',
    name: "пальто",
    price: 90000,
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Mavy'
  },
   
  { 
    category: 'menclothes',
    img:'/jeans.jpeg',
    name: "жинсэн цамц",
    price: 34000,
    mencloth:[{   brand:'Mavy',
    category: 'menclothes',
    img:'/jeans.jpeg',
    name: "жинсэн цамц",
    price: 34000,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Mavy'
  },
  { 
    category: 'menclothes',
    img: '/suit1.png',
    name: "костьюм",
    price: 108000,
    mencloth:[{    brand: 'Louis Vuitton',
   
    category: 'menclothes',
    img: '/suit1.png',
    name: "костьюм",
    price: 108000,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand: 'Louis Vuitton'
  },
  { 
    category: 'menclothes',
  img: '/suit2.png',
    name: "костьюм",
    price: 134000,
    mencloth:[{brand: 'Louis Vuitton',
   
    category: 'menclothes',
    img: '/suit2.png',
      name: "костьюм",
      price: 134000,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand: 'Louis Vuitton'
  },
    {
      category: 'menclothes',
    img: '/men12.jpeg',
    name: "LV бүс",
    price: 1400000,
    mencloth:[{ brand: 'Louis Vuitton',
   
    category: 'menclothes',
    img: '/men12.jpeg',
    name: "LV бүс",
    price: 1400000,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand: 'Louis Vuitton'
  },
    { 
      category: 'menclothes',
    img: '/hoodie.jpeg',
    name: "хослол",
    price: 123400,
    mencloth:[{ brand:'Mavy',
   
    category: 'menclothes',
    img: '/hoodie.jpeg',
    name: "хослол",
    price: 123400,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Mavy'

  },
    {
      category: 'menclothes',
    img: '/men2.jpeg',
    name: "Nike пүүз",
    price: 3190000,
    mencloth:[{ brand:'Nike',

    category: 'menclothes',
    img: '/men2.jpeg',
    name: "Nike пүүз",
    price: 3190000,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Nike'
  },
    { 
      category: 'menclothes',
    img: '/men3.jpeg',
    name: "Hermes үнэртэй ус",
    price: 56700,
    mencloth:[{ brand:'Hermes',
 
    category: 'menclothes',
    img: '/men3.jpeg',
    name: "Hermes үнэртэй ус",
    price: 56700,   about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Hermes'
  },    
    { 
      category: 'menclothes',
    img: '/coat1.jpeg',
    name: "пальто",
    price: 98100,
    mencloth:[{ brand:'Hermes',

    category: 'menclothes',
    img: '/coat1.jpeg',
    name: "пальто",
    price: 98100, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Hermes'
  },
    { 
      category: 'menclothes',
    img: '/men8.jpeg',
    name: "Tiffany & Co үнэртэн ",
    price: 67800,
    mencloth:[{ brand:'Tiffany & Co',
  
    category: 'menclothes',
    img: '/men8.jpeg',
    name: "Tiffany & Co үнэртэн ",
    price: 67800, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Tiffany & Co'
  },
    {
      category: 'menclothes',
    img: '/men4.jpeg',
    name: "Hermes цамц",
    price: 43900,
    mencloth:[{ brand: 'Hermes',

    category: 'menclothes',
    img: '/men4.jpeg',
    name: "Hermes цамц",
    price: 43900, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand: 'Hermes'
  },
    { 
      category: 'menclothes',
    img:'/men5.jpeg',
    name: "LV пальто",
    price: 5120000,
    mencloth:[{  brand: 'Louis Vuitton',

    category: 'menclothes',
    img:'/men5.jpeg',
    name: "LV пальто",
    price: 5120000, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand: 'Louis Vuitton'
  },
  {
    
    category: 'menclothes',
    img: '/men6.jpeg',
    special:true,
    sale: '40% off',
    name: 'LV пальто',
    price: 3390000,
    mencloth:[{
        brand: 'Louis Vuitton',
  
        category: 'menclothes',
        img: '/men6.jpeg',
        special:true,
        sale: '40% off',
        name: 'LV пальто',
        price: 3390000, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand: 'Louis Vuitton'
  },
  {
    
    category: 'menclothes',
    img:'/shoe.jpeg',
    name: 'гутал',
    price:120000,
    mencloth:[{ brand:'Mavy',

    category: 'menclothes',
    img:'/shoe.jpeg',
    name: 'гутал',
    price:120000, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Mavy'
  },
  {
    
    category: 'menclothes',
    img:'/men9.jpeg',
    name: 'Tiffany & Co шил',
    price:56000,
    mencloth:[{ brand:'Tiffany & Co',

    category: 'menclothes',
    img:'/men9.jpeg',
    name: 'Tiffany & Co шил',
    price:56000, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Tiffany & Co'
  },
  {
    
    category: 'menclothes',
    img:'/men7.jpeg',
    special:true,
    sale: '30% off',
    name: 'Tiffany & Co гутал',
    price:800000,
    mencloth:[{    brand:'Tiffany & Co',

    category: 'menclothes',
    img:'/men7.jpeg',
    special:true,
    sale: '30% off',
    name: 'Tiffany & Co гутал',
    price:800000, about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'}],
    brand:'Tiffany & Co'
  }
        ]
        const insertedMenClothes = await menclothes.insertMany(newMenClothes);
    res.json(insertedMenClothes);
    }

    catch (err) {
      console.error(err);
      res.status(500).send('Error 500')
    }
})

router.get('/:_id', async (req, res) => {
  try {
      const mencloth = await menclothes.findById(req.params._id);
      res.json(mencloth);
  } catch (err) {
      res.json({ message: err });
  }
});








module.exports = router