const express = require('express');
const {rings} = require('./db');
const router = express.Router();
const { ObjectId } = require('mongodb');
router.get('/', async (req, res)=>{
    try{
        const newRings = [
            {
              category: 'rings',
  img: '/ring1.jpeg',
  special: true,
  sale: '25% off',
  name: "Swarowski бөгж",
  price: 5000000,
  brand:'Swarowski',
ring: [{ _id: new ObjectId(),
  category: 'rings',
img: '/ring1.jpeg',
special: true,
sale: '25% off',
name: "Swarowski бөгж",
price: 50000000,
brand:'Swarowski',
about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',}]

   },
  {
    category: 'rings',
  img:  '/ring2.jpeg',
  name: "Алтан бөгж",
  price:  1000000,
  brand:'Neil Lane',
  ring: [{ _id: new ObjectId(),
    category: 'rings',
  img:  '/ring2.jpeg',
  name: "Алтан бөгж",
  price:  1000000,
  brand:'Neil Lane',
  about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',}]
 
  },
  { 
    category: 'rings',
    img:'/ring3.jpeg',
    name: "Neil Lane бөгж",
    price: 2000000,
    brand:'Neil Lane',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img:'/ring3.jpeg',
    name: "Neil Lane бөгж",
    price: 2000000,
    brand:'Neil Lane',
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',}]

    },
    { 
      category: 'rings',
    img: '/ring4.jpeg',
    name: "Vera Wang бөгж",
    price: 4500000,
    brand:'Vera Wang',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/ring4.jpeg',
    name: "Vera Wang бөгж",
    price: 4500000,
    brand:'Vera Wang',
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',}]

    },  
    {
      category: 'rings',
    img: '/ring5.jpeg',
    name: "Vera Wang бөгж",
    price: 3000000,

    
    brand:'Vera Wang',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/ring5.jpeg',
    name: "Vera Wang бөгж",
    price: 3000000,

    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Vera Wang',}]
    },
    { 
      category: 'rings',
    img: '/ring6.jpeg',
    special:true,
    sale: '25% off',
    name: "Cartier бөгж",
    price: 780000,

    
    brand:'Cartier',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/ring6.jpeg',
    special:true,
    sale: '25% off',
    name: "Cartier бөгж",
    price: 780000,

    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Cartier',}]

    },
    { 
      category: 'rings',
    img: '/rings1.jpeg',
    name: "Bussellati бөгж",
    price: 888000,
  
    brand:'Buccellati',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/rings1.jpeg',
    name: "Bussellati бөгж",
    price: 888000,
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Buccellati',}]

    },
    { 
      category: 'rings',
    img: '/rings2.jpeg',
    name: "Chopard бөгж",
    price: 8880000,
 
    brand:'Chopard',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/rings2.jpeg',
    name: "Chopard бөгж",
    price: 888000,
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Chopard',}]

    },
    { 
      category: 'rings',
    img: '/rings3.jpeg',
    name: "Swarowski бөгж",
    price: 888000,
  
    brand:'Swarowski',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/rings3.jpeg',
    name: "Swarowski бөгж",
    price: 8880000,
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Swarowski',}]

    },
    { 
      category: 'rings',
    img: '/rings4.jpeg',
    name: "Swarowski бөгж",
    price: 8880000,
   
    brand:'Swarowski',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/rings4.jpeg',
    name: "Swarowski бөгж",
    price: 8880000,
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Swarowski',
}]

    },
    { 
      category: 'rings',
    img: '/rings5.jpeg',
    name: "Swarowski бөгж",
    price: 6590000,
   
    brand:'Swarowski',
    ring: [{ _id: new ObjectId(),
      category: 'rings',
    img: '/rings5.jpeg',
    name: "Swarowski бөгж",
    price: 6590000,
    about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил',
    brand:'Swarowski',}]

    },

        ]
        const insertedNewRings = await rings.insertMany(newRings);
        res.json(insertedNewRings);
    
      } catch (error) {
        console.error(error);
        res.status(500).send('Error 500')
      }
})


router.get('/:_id', async (req, res) => {
  try {
      const ring = await rings.findById(req.params._id);
      res.json(ring);
  } catch (err) {
      res.json({ message: err });
  }
});
  module.exports = router