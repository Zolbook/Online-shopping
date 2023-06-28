const express = require('express');
const {
  makeupCollection
} = require('./db');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const newMakeups = [{

        img: '/lip1.jpeg',
        name: "Уруулын будаг",
        price: 30000,
        category: 'makeup',
        makeup: [{
  
          img: '/lip1.jpeg',
          name: "Уруулын будаг",
          price: 30000,
          brand: 'Lakme',
          category: 'makeup',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Lakme'
      },
      {
    
        img: '/gloss.jpeg',
        name: "Уруул өнгөлөгч",
        price: 8000,
        category: 'makeup',
        makeup: [{
      
          img: '/gloss.jpeg',
          name: "Уруул өнгөлөгч",
          price: 8000,
          brand: 'Lakme',
          category: 'makeup',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Lakme'
      },
      {
    
        category: 'makeup',
        img: '/lakme.jpeg',
        name: "тень",
        price: 78000,
        makeup: [{

          category: 'makeup',
          img: '/lakme.jpeg',
          name: "тень",
          price: 78000,
          brand: 'Lakme',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Lakme'

      },
      {
 
        category: 'makeup',
        img: '/cc.jpeg',
        name: "Cc крем",
        price: 13000,
        makeup: [{

          category: 'makeup',
          img: '/cc.jpeg',
          name: "Cc крем",
          price: 13000,
          brand: 'Golden Rose',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Golden Rose'
      },

      {
  
        category: 'makeup',
        img: '/foundation.jpeg',
        name: "Суурь энгэсэг",
        price: 34000,
        makeup: [{
       
          category: 'makeup',
          img: '/foundation.jpeg',
          name: "Суурь энгэсэг",
          price: 34000,
          brand: 'Revlon',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Revlon'
      },

      {

        category: 'makeup',
        img: '/eyeliner.jpeg',
        name: "нүдний контур",
        price: 68000,
        makeup: [{
   
          category: 'makeup',
          img: '/eyeliner.jpeg',
          name: "нүдний контур",
          price: 68000,
          brand: 'Golden Rose',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Golden Rose'

      },
      {
   
        category: 'makeup',
        img: '/mascara.jpeg',
        name: "сормуусны будаг",
        price: 60000,
        makeup: [{
   
          category: 'makeup',
          img: '/mascara.jpeg',
          name: "сормуусны будаг",
          price: 60000,
          brand: 'Diamond Breeze',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Diamond Breeze'

      },

      {
    
        category: 'makeup',
        img: '/powder.jpeg',
        name: "Энгэсэг",
        price: 30000,
        makeup: [{
       
          category: 'makeup',
          img: '/powder.jpeg',
          name: "Энгэсэг",
          price: 30000,
          brand: 'Cucci',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Cucci'

      },
      {
 
        category: 'makeup',
        img: '/blusher.jpeg',
        name: "Хацар өнгөлөгч",
        price: 23000,
        makeup: [{
         category: 'makeup',
          img: '/blusher.jpeg',
          name: "Хацар өнгөлөгч",
          price: 23000,
          brand: 'Cucci',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Cucci'
      },
      {
     
        category: 'makeup',
        img: '/dior.jpeg',
        name: "Сүрчиг",
        price: 194500,
        makeup: [{
      
          category: 'makeup',
          img: '/dior.jpeg',
          name: "Сүрчиг",
          price: 194500,
          brand: 'Dior',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Dior'
      },
      {
      
        category: 'makeup',
        img: '/lip.jpeg',
        name: "Уруулын будаг",
        price: 26000,
        makeup: [{
       
          category: 'makeup',
          img: '/lip.jpeg',
          name: "Уруулын будаг",
          price: 26000,
          brand: 'Diamond Breeze',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Diamond Breeze'
      },
      {
      
        category: 'makeup',
        img: '/make1.jpeg',
        name: "Уруул өнгөлөгч",
        price: 26000,
        makeup: [{
      
          category: 'makeup',
          img: '/make1.jpeg',
          name: "Уруул өнгөлөгч",
          price: 26000,
          brand: 'Diamond Breeze',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Diamond Breeze'
      },
      {

        category: 'makeup',
        img: '/make2.jpeg',
        name: "Сормуусны будаг",
        price: 26000,
        makeup: [{

          category: 'makeup',
          img: '/make2.jpeg',
          name: "Сормуусны будаг",
          price: 26000,
          brand: 'Yves Rocher',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Yves Rocher'
      },
      {
 
        category: 'makeup',
        img: '/make3.jpeg',
        name: "Нүдний контур",
        price: 30000,
        makeup: [{
  
          category: 'makeup',
          img: '/make3.jpeg',
          name: "Нүдний контур",
          price: 30000,
          brand: 'Lakme',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Lakme'
      },
      {

        category: 'makeup',
        img: '/make4.jpeg',
        name: "BB крем",
        price: 30000,
        makeup: [{
 
          category: 'makeup',
          img: '/make4.jpeg',
          name: "BB крем",
          price: 30000,
          brand: 'Golden Rose',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Golden Rose'
      },
      {

        category: 'makeup',
        img: '/make5.jpeg',
        name: "Сүрчиг",
        price: 80000,
        makeup: [{

          category: 'makeup',
          img: '/make5.jpeg',
          name: "Сүрчиг",
          price: 80000,
          brand: 'Tiffany & Co',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Tiffany & Co'
      },
      {
  
        category: 'makeup',
        img: '/make6.jpeg',
        name: "Уруул өнгөлөгч",
        price: 35000,
        makeup: [{

          category: 'makeup',
          img: '/make6.jpeg',
          name: "Уруул өнгөлөгч",
          price: 35000,
          brand: 'Cucci',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Cucci'
      },
      {
   
        category: 'makeup',
        img: '/make7.jpeg',
        special:true,
        sale: '10% off',
        name: "Өө дарагч",
        price: 51000,
        makeup: [{
   
          category: 'makeup',
          img: '/make7.jpeg',
          special:true,
          sale: '10% off',
          name: "Өө дарагч",
          price: 51000,
          brand: 'Dermacol',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Dermacol'
      },

      {

        category: 'makeup',
        img: '/make8.jpeg',
        name: "Нүдний тень",
        price: 45000,
        makeup: [{
    
          category: 'makeup',
          img: '/make8.jpeg',
          name: "Нүдний тень",
          price: 45000,
          brand: 'Dermacol',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Dermacol'
      },
      {
      
        category: 'makeup',
        img: '/make9.jpeg',
        name: "Хөмсөгний харандаа",
        price: 25000,
        makeup: [{
        
          category: 'makeup',
          img: '/make9.jpeg',
          name: "Хөмсөгний харандаа",
          price: 25000,
          brand: 'Dermacol',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Dermacol'
      },

      {
      
        category: 'makeup',
        img: '/make10.jpeg',
        name: "Хөмсөгний харандаа",
        price: 15000,
        makeup: [{
        
          category: 'makeup',
          img: '/make10.jpeg',
          name: "Хөмсөгний харандаа",
          price: 15000,
          brand: 'Cucci',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Cucci'
      },

      {
   
        category: 'makeup',
        img: '/make11.jpeg',
        name: "Хумсны будаг",
        price: 15000,
        makeup: [{
        
          category: 'makeup',
          img: '/make11.jpeg',
          name: "Хумсны будаг",
          price: 15000,
          brand: 'Diamond Breeze',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Diamond Breeze'
      },
      {
       
        category: 'makeup',
        img: '/make12.jpeg',
        name: "Нүдний тень",
        price: 55000,
        makeup: [{
      
          category: 'makeup',
          img: '/make12.jpeg',
          name: "Нүдний тень",
          price: 55000,
          brand: 'Revlon',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Revlon'
      },
      {
      
        category: 'makeup',
        img: '/make13.jpeg',
        name: "Хацар өнгөлөгч",
        price: 35000,
        makeup: [{
    
          category: 'makeup',
          img: '/make13.jpeg',
          name: "Хацар өнгөлөгч",
          price: 35000,
          brand: 'Revlon',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
        brand: 'Revlon'
      }

    ]
    const insertedNewMakeups = await makeupCollection.insertMany(newMakeups);
    res.json(insertedNewMakeups)
  } catch (err) {
    console.error(err);
    res.status(500).send('Error 500')
  }
})


router.get('/:_id', async(req, res)=>{
  try{
    const make = await makeupCollection.findById(req.params._id);
    res.json(make)
  } catch (err) {
    res.json({ message: err });
}
})

module.exports = router