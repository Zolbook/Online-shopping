const express = require('express');
const {
  chains
} = require('./db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const newChains = [{
 
        category: 'chains',
        img: '/chain1.jpeg',
        name: "Swarowski зүүлт",
        price: 160000,
        brand: 'Swarowski',
        chain: [{
   
          category: 'chains',
          img: '/chain1.jpeg',
          name: "Swarowski зүүлт",
          price: 160000,
          brand: 'Swarowski',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }]

      },
      {
       
        category: 'chains',
        img: '/chain2.jpeg',
        name: "Tiffany алтан ээмэг",
        price: 98000,
       special: true,
       sale: '20% off',
        brand: 'Tiffany & Co',
        chain: [{
     
          category: 'chains',
          img: '/chain2.jpeg',
          special: true,
          sale: '20% off',
          name: "Tiffany алтан ээмэг",
          price: 98000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Tiffany & Co',
        }]
      },
      {
   
        category: 'chains',
        img: '/chain3.jpeg',
        name: "Harry Winston ээмэг",
        price: 780000,

        brand: 'Harry Winston',
        chain: [{
   
          category: 'chains',
          img: '/chain3.jpeg',
          name: "Harry Winston ээмэг",
          price: 780000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Harry Winston',
        }]

      },
      {
  
        category: 'chains',
        img: '/chain4.jpeg',
        name: "Buccellati зүүлт",
        price: 500000,

        brand: 'Buccellati',
        chain: [{
    
          category: 'chains',
          img: '/chain4.jpeg',
          name: "Buccellati зүүлт",
          price: 500000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Buccellati',
        }]
      },
      {
      
        category: 'chains',
        img: '/chain5.jpeg',
        name: "Swarowski ээмэг",
        price: 5000000,

        brand: 'Swarowski',
        chain: [{
   
          category: 'chains',
          img: '/chain5.jpeg',
          name: "Swarowski ээмэг",
          price: 5000000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Swarowski',
        }]
      },
      {
 
        category: 'chains',
        img: '/chain6.jpeg',
        name: "Chopard ээмэг",
        price: 450000,

        brand: 'Chopard',
        chain: [{
      
          category: 'chains',
          img: '/chain6.jpeg',
          name: "Chopard ээмэг",
          price: 450000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Chopard',
        }]
      },

      {
       
        category: 'chains',
        img: '/jew1.jpeg',
        name: "Tiffany & Co зүүлт",
        price: 5500000,

        brand: 'Tiffany & Co',
        chain: [{

          category: 'chains',
          img: '/jew1.jpeg',
          name: "Tiffany & Co зүүлт",
          price: 5500000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Tiffany & Co',
        }]
      },
      {
       
        category: 'chains',
        img: '/jew2.jpeg',
        name: "Tiffany & Co ээмэг",
        price: 6000000,

        brand: 'Tiffany & Co',
        chain: [{
       
          category: 'chains',
          img: '/jew2.jpeg',
          name: "Tiffany & Co ээмэг",
          price: 6000000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Tiffany & Co',
        }]
      },
      {
     
        category: 'chains',
        img: '/jew3.jpeg',
        name: "Tiffany & Co ээмэг",
        price: 6050000,

        brand: 'Tiffany & Co ',
        chain: [{
   
          category: 'chains',
          img: '/jew3.jpeg',
          name: "Tiffany & Co ээмэг",
          price: 6050000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Tiffany & Co ',
        }]
      },
      {
       
        category: 'chains',
        img: '/jew4.jpeg',
        name: "Harry Winston ээмэг",
        price: 6050000,

        brand: 'Harry Winston ',
        chain: [{
       
          category: 'chains',
          img: '/jew4.jpeg',
          name: "Harry Winston ээмэг",
          price: 6050000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Harry Winston ',
        }]
      },
      {
      
        category: 'chains',
        img: '/jew5.jpeg',
        name: "Harry Winston ээмэг",
        price: 7050000,
        chain: [{
    
          category: 'chains',
          img: '/jew5.jpeg',
          name: "Harry Winston ээмэг",
          price: 7050000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Harry Winston '
        }],
        brand: 'Harry Winston '
      },
      {
     
        category: 'chains',
        img: '/jew6.jpeg',
        special:true,
        sale: '10% off',
        name: "Chopard зүүлт",
        price: 8050000,

        brand: 'Chopard',
        chain: [{
    
          category: 'chains',
          img: '/jew6.jpeg',
          special:true,
          sale: '10% off',
          name: "Chopard зүүлт",
          price: 8050000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Chopard',
        }]
      },
      {
 
        category: 'chains',
        img: '/jew7.jpeg',
        name: "Chopard зүүлт",
        price: 9000000,
        chain: [{
  
          category: 'chains',
          img: '/jew7.jpeg',
          name: "Chopard зүүлт",
          price: 9000000,
          brand: 'Chopard',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил'
        }],
    
        brand: 'Chopard'
      },
      {
       
        category: 'chains',
        img: '/jew8.jpeg',
        name: "Chopard ээмэг",
        price: 9000000,

        brand: 'Chopard',
        chain: [{
 
          category: 'chains',
          img: '/jew8.jpeg',
          name: "Chopard ээмэг",
          price: 9000000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Chopard',
        }]
      },
      {
      
        category: 'chains',
        img: '/jew9.jpeg',
        name: "Buccellati зүүлт",
        price: 7500000,

        brand: 'Buccellati',
        chain: [{
  
          category: 'chains',
          img: '/jew9.jpeg',
          name: "Buccellati зүүлт",
          price: 7500000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Buccellati',
        }]
      },
      {
   
        category: 'chains',
        img: '/jew10.jpeg',
        name: "Buccellati ээмэг",
        price: 7500000,

        brand: 'Buccellati',
        chain: [{
  
          category: 'chains',
          img: '/jew10.jpeg',
          name: "Buccellati ээмэг",
          price: 7500000,
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
          brand: 'Buccellati',
        }]
      },
    ]
    const insertedNewChains = await chains.insertMany(newChains);

    res.json(insertedNewChains)

  } catch (err) {
    console.error(err);
    res.status(500).send('Error 500')
  }
});

router.get('/:_id', async (req, res) => {
  try {
      const chain = await chains.findById(req.params._id);
      res.json(chain);
  } catch (err) {
      res.json({ message: err });
  }
});


module.exports = router