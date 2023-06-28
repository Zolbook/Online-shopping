const express = require('express');
const {womenclothes} = require('./db');
const router = express.Router();


router.get('/', async(req, res)=>{
try{
    const newwomenClothes = [
        {
          category: 'womenClothes',
        img:'/womanshirt1.jpeg',
        special:true,
        sale: '15% off',
        name: "цамц",
        price:50000,
          womencloth:[{
            category: 'womenClothes',
          img:'/womanshirt1.jpeg',
          special:true,
          sale: '15% off',
          name: "цамц",
          price:50000,
          brand:'Mavy',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand:'Mavy'
      
         },
        {
          category: 'womenClothes',
        img:  '/hoodiesuit.jpeg',
        special: true,
        sale: '25% off',
        name: "хослол",
        price:  159000,
        womencloth: [{ 
          category: 'womenClothes',
        img:  '/hoodiesuit.jpeg',
        special: true,
        sale: '25% off',
        name: "хослол",
        price:  159000,
        about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил', brand:'Mavy'}],
        brand:'Mavy'
        },
      
        { 
          category: 'womenClothes',
          img: '/fem.jpeg',
          name: "хүрэм",
          price: 76900,
          womencloth: [{  
           
            category: 'womenClothes',
          img: '/fem.jpeg',
          name: "хүрэм",
          price: 76900,
            about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
            brand:'Herry'}],
          brand:'Herry'
        },
        { 
          category: 'womenClothes',
          img:'/skirt.jpeg',
          name: "юбка",
          price: 37400,
          womencloth: [{  
           
            category: 'womenClothes',
          img:'/skirt.jpeg',
          name: "юбка",
          price: 37400,
            about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
            brand:'Herry'}],
          brand:'Herry'
        },
        { 
          category: 'womenClothes',
          img: '/pant.jpeg',
          name: "өмд",
          price: 46900,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
        
          category: 'womenClothes',
          img: '/pant.jpeg',
          name: "өмд",
          price: 46900,
          brand:'Herry'}],
          brand:'Herry'
        },
        { 
          category: 'womenClothes',
          img:  '/p.jpeg',
          name: "цамц",
          price: 32000,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
         
          category: 'womenClothes',
          img:  '/p.jpeg',
          name: "цамц",
          price: 32000,
          brand:'Herry'}],
          brand:'Herry'
        },
          {
            category: 'womenClothes',
          img: '/blazer2.jpeg',
          name: "блэйзэр",
          price: 45900,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand:'Herry',
        
          category: 'womenClothes',
          img: '/blazer2.jpeg',
          name: "блэйзэр",
          price: 45900,
          brand:'Herry'}],
          brand:'Herry'
        },
          { 
            category: 'womenClothes',
          img:  '/coat2.jpeg',
          name: "хүрэм",
          price: 65400,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
         
          category: 'womenClothes',
          img:  '/coat2.jpeg',
          name: "хүрэм",
          price: 65400,
          brand:'Herry'}],
          brand:'Herry'
        },
          { 
            category: 'womenClothes',
          img: '/coat3.jpeg',
          name: "хүрэм",
          price: 56700,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
       
          category: 'womenClothes',
          img: '/coat3.jpeg',
          name: "хүрэм",
          price: 56700,
          brand: 'Zara'}],
          brand: 'Zara'
        },
      
        {
          category: 'womenClothes',
        img: '/cloth1.jpeg',
        name: "Цүнх",
        price: 256700,
        womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    
        category: 'womenClothes',
        img: '/cloth1.jpeg',
        name: "Цүнх",
        price: 256700,
        brand: 'Zara'}],
        brand: 'Zara'
      },
      
          {
            category: 'womenClothes',
          img: '/palto.jpeg',
          name: "пальто",
          price: 170000,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
         
          category: 'womenClothes',
          img: '/palto.jpeg',
          name: "пальто",
          price: 170000,
          brand: 'Zara'}],
          brand: 'Zara'
        },
          { 
            category: 'womenClothes',
          img: '/dress.jpeg',
          name: "даашинз",
          price: 13400,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
         
          category: 'womenClothes',
          img: '/dress.jpeg',
          name: "даашинз",
          price: 13400,
          brand: 'Zara'}],
          brand: 'Zara'
        },
          { 
            category: 'womenClothes',
          img: '/kurtik.jpeg',
          name: "куртик",
          price: 150000,
          womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
     
          category: 'womenClothes',
          img: '/kurtik.jpeg',
          name: "куртик",
          price: 150000,
          brand: 'Zara'}],
          brand: 'Zara'
        },
        { 
          category: 'womenClothes',
        img: '/cloth2.jpeg',
        name: "LV цүнх",
        price: 150000,
        womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
       
        category: 'womenClothes',
        img: '/cloth2.jpeg',
        name: "LV цүнх",
        price: 150000,
        brand: 'Louis Vuitton'}],
        brand: 'Louis Vuitton'
      },
      
        { 
          category: 'womenClothes',
        img: '/yellow2.jpeg',
        name: "LV даашинз",
        price: 296000,
        womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
   
        category: 'womenClothes',
        img: '/yellow2.jpeg',
        name: "LV даашинз",
        price: 296000,
        brand: 'Louis Vuitton'}],
        brand: 'Louis Vuitton'
      },
      
      { 
        category: 'womenClothes',
      img: '/cloth3.jpeg',
      name: "LV даашинз",
      price: 156000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
  
      category: 'womenClothes',
      img: '/cloth3.jpeg',
      name: "LV даашинз",
      price: 156000,
      brand: 'Louis Vuitton'}],
      brand: 'Louis Vuitton'
      },
      { 
        category: 'womenClothes',
      img: '/cloth4.jpeg',
      name: "LV даашинз",
      price: 156000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',

      category: 'womenClothes',
      img: '/cloth4.jpeg',
      name: "LV даашинз",
      price: 156000,
      brand: 'Louis Vuitton'}],
      brand: 'Louis Vuitton'
      },
      { 
        category: 'womenClothes',
      img: '/cloth5.jpeg',
      name: "LV хүрэм",
      price: 756000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
     
      category: 'womenClothes',
      img: '/cloth5.jpeg',
      name: "LV хүрэм",
      price: 756000,
      brand: 'Louis Vuitton'}],
      brand: 'Louis Vuitton'
      },
      { 
        category: 'womenClothes',
      img: '/cloth6.jpeg',
      name: "LV туфли",
      price: 560000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    
      category: 'womenClothes',
      img: '/cloth6.jpeg',
      name: "LV туфли",
      price: 560000,
      brand: 'Louis Vuitton'}],
      brand: 'Louis Vuitton'
      },
      
      { 
        category: 'womenClothes',
      img: '/cloth7.jpeg',
      name: "Tiffany & Co гутал",
      price: 360000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
     
      category: 'womenClothes',
      img: '/cloth7.jpeg',
      name: "Tiffany & Co гутал",
      price: 360000,
      brand:'Tiffany & Co'}],
      brand:'Tiffany & Co'
      },
      
      { 
        category: 'womenClothes',
      img: '/cloth9.jpeg',
      name: "Tiffany & Co туфли",
      price: 610000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',

      category: 'womenClothes',
      img: '/cloth9.jpeg',
      name: "Tiffany & Co туфли",
      price: 610000,      brand:'Tiffany & Co'}],
      brand:'Tiffany & Co'
      },
      { 
        category: 'womenClothes',
      img:'/cloth8.jpeg',
      name: "Cucci пиджак",
      price: 410000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
  
      category: 'womenClothes',
      img:'/cloth8.jpeg',
      name: "Cucci пиджак",
      price: 410000,
      brand: 'Cucci'}],
      brand: 'Cucci'
      },
      
      { 
        category: 'womenClothes',
      img: '/cloth10.jpeg',
      name: "Prada цүнх",
      price: 670000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
   
      category: 'womenClothes',
      img: '/cloth10.jpeg',
      name: "Prada цүнх",
      price: 670000,
      brand:'Prada'}],
      brand:'Prada'
      },
      
      { 
        category: 'womenClothes',
      img: '/cloth11.jpeg',
      special:true,
      sale: '25% off',
      name: "Prada даашинз",
      price: 1400000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',

      category: 'womenClothes',
      img: '/cloth11.jpeg',
      special:true,
      sale: '25% off',
      name: "Prada даашинз",
      price: 1400000,
      brand:'Prada'}],
      brand:'Prada'
      },
      { 
        category: 'womenClothes',
      img: '/cloth12.jpeg',
      name: "Prada  гутал",
      price: 3100000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    
      category: 'womenClothes',
      img: '/cloth12.jpeg',
      name: "Prada  гутал",
      price: 3100000,
      brand:'Prada'}],
      brand:'Prada'
      },
      
      { 
        category: 'womenClothes',
      img: '/cloth13.jpeg',
      name: "Prada  гутал",
      price: 4000000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    
      category: 'womenClothes',
      img: '/cloth13.jpeg',
      name: "Prada  гутал",
      price: 4000000,  brand:'Prada'}],
      brand:'Prada'
      },
      
      {
        category: 'womenClothes',
      img: '/cloth14.jpeg',
      special:true,
      sale: '20% off',
      name: "Cucci юбка",
      price: 1200000,
      womencloth: [{  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил', 
  
      category: 'womenClothes',
      img: '/cloth14.jpeg',
      special:true,
      sale: '20% off',
      name: "Cucci юбка",
      price: 1200000,
      brand: 'Cucci'}],
      brand: 'Cucci'
      },
      ]
      const insertedWomenClothes = await womenclothes.insertMany(newwomenClothes);

      res.json(insertedWomenClothes)
  
    } catch (err) {
      console.error(err);
      res.status(500).send('Error 500')
    }
  });
  

  router.get('/:_id', async (req, res) => {
    try {
        const womencloth = await womenclothes.findById(req.params._id);
        res.json(womencloth);
    } catch (err) {
        res.json({ message: err });
    }
  });
  
  
  module.exports = router 
