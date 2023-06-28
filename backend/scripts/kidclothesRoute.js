const express = require('express');
const {kidclothes} = require('./db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const newKidclothes = [{
   
        img: '/kids2.jpeg',
        name: "боди",
        price: 18000,
        brand: 'Joker Baby',
        category: 'kidClothes',
        kidclothes: [{
      
          img: '/kids2.jpeg',
          name: "боди",
          price: 18000,
          brand: 'Joker Baby',
          category: 'kidClothes',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
 
        img: '/kids3.jpeg',
        name: "нарны малгай",
        price: 20000,
        brand: 'Joker Baby',
        category: 'kidClothes',
        kidclothes: [{
 
          img: '/kids3.jpeg',
          name: "боди",
          price: 18000,
          brand: 'Joker Baby',
          category: 'kidClothes',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
      
        img: '/kids4.jpeg',
        name: "комбинзон",
        price: 28000,
        brand: 'Joker Baby',
        category: 'kidClothes',
        kidclothes: [{
 
          img: '/kids4.jpeg',
          name: "боди",
          price: 18000,
          brand: 'Joker Baby',
          category: 'kidClothes',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
   
        img: '/kids5.jpeg',
        special: true,
        sale: '20% off',
        name: "плать",
        price: 23000,
        category: 'kidClothes',
        kidclothes: [{
  
          img: '/kids5.jpeg',
          special: true,
          sale: '20% off',
          name: "боди",
          category: 'kidClothes',
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }],
        brand: 'Joker Baby'
      },
      {
      
        img: '/kids6.jpeg',
        name: "хослол",
        price: 14000,
        category: 'kidClothes',
        brand: 'Joker Baby',
        kidclothes: [{
  
          img: '/kids6.jpeg',
          category: 'kidClothes',
          name: "боди",
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
    
        img: '/kids1.jpeg',
        name: "пүүз",
        price: 38000,
        category: 'kidClothes',
        brand: 'Joker Baby',
        kidclothes: [{
       
          category: 'kidClothes',
          img: '/kids1.jpeg',
          name: "боди",
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
     
        img: '/kids7.jpeg',
        name: "хослол",
        price: 30000,
        brand: 'Joker baby',
        category: 'kidClothes',
        kidclothes: [{
 
          img: '/kids7.jpeg',
          name: "боди",
          category: 'kidClothes',
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },

      {
   
        img: '/kids8.jpeg',
        name: "бойтог",
        category: 'kidClothes',
        price: 35000,
        brand: 'Joker Baby',
        kidclothes: [{
  
          img: '/kids8.jpeg',
          name: "боди",
          price: 18000,
          category: 'kidClothes',
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },


      {
   
        img: '/kids9.jpeg',
        name: "плаж",
        price: 39000,
        category: 'kidClothes',
        brand: 'Joker Baby',
        kidclothes: [{
    
          category: 'kidClothes',
          img: '/kids9.jpeg',
          name: "боди",
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
  
        img: '/kids10.jpeg',
        name: "хүрэм",
        price: 39000,
        category: 'kidClothes',
        brand: 'Joker Baby',
        kidclothes: [{
    
          img: '/kids10.jpeg',
          name: "боди",
          category: 'kidClothes',
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },

      {
  
        img: '/kid1.jpeg',
        special: true,
        sale: '30% off',
        name: "Gini & Jony плать",
        price: 78000,
        category: 'kidClothes',
        brand: 'Gini & Jony',
        kidclothes: [{

          img: '/kid1.jpeg',
          special: true,
          sale: '30% off',
          name: "боди",
          category: 'kidClothes',
          price: 18000,
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },

      {
    
        img: '/kid2.jpeg',
        name: "Gini & Jony цамц",
        price: 880000,
        category: 'kidClothes',
        brand: 'Gini & Jony',
        kidclothes: [{
   
          img: '/kid2.jpeg',
          name: "боди",
          price: 18000,
          category: 'kidClothes',
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },

      {
    
        img: '/kid3.jpeg',
        name: "Gini & Jony куртик",
        price: 1000000,
        category: 'kidClothes',
        brand: 'Gini & Jony',
        kidclothes: [{
     
          img: '/kid3.jpeg',
          name: "боди",
          price: 18000,
          category: 'kidClothes',
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
  
        img: '/kid4.jpeg',
        special:true,
        sale: '40% off',
        name: "Adidas пүүз",
        price: 1000000,
        category: 'kidClothes',
        brand: 'Adidas',
        kidclothes: [{

          img: '/kid4.jpeg',
          special:true,
          sale: '40% off',
          name: "боди",
          price: 18000,
          category: 'kidClothes',
          brand: 'Joker Baby',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
  
        img: '/kid5.jpeg',
        name: " Шорт футболка",
        price: "100000",
        category: 'kidClothes',
        brand: 'Lilliput',
        kidclothes: [{

          img: '/kid5.jpeg',
          name: " Шорт футболка",
          price: "100000",
          category: 'kidClothes',
          brand: 'Lilliput',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
    ];
   const insertedNewClothes = await kidclothes.insertMany(newKidclothes);
    res.json(insertedNewClothes);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error 500')
  }
});

router.get('/:_id', async (req, res) => {
  try {
      const kid = await kidclothes.findById(req.params._id);
      res.json(kid);
  } catch (err) {
      res.json({ message: err });
  }
});

module.exports = router