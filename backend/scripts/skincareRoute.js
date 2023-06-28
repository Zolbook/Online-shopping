const express = require('express');
const {
  skincareModel
} = require('./db');
const router = express.Router();

router.use(express.static('public'));
router.get('/', async (req, res) => {
  try {
    const newSkincares = [{

        category: 'skincare',
        img: '/download.png',
        name: "Чийгшүүлэгч тос",
        price: 50000,
        brand: 'Yves Rocher',
        skincare: [{
   
          category: 'skincare',
          img: '/download.png',
          name: "Чийгшүүлэгч тос",
          price: 50000,
          brand: 'Yves Rocher',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ'
        }]
      },
      {
      
        category: 'skincare',
        img: '/set.jpeg',
        name: "Үрчээний эсрэг ком",
        price: 98000,
        brand: '24k',
        skincare: [{
      
          category: 'skincare',
          img: '/set.jpeg',
          name: "Үрчээний эсрэг ком",
          price: 98000,
          brand: '24k',
          about: 'Нүүр цэвэрлэгч, серум, гиалуроны хүчил, нарнаас хамгаалах тосноос бүрдсэн энэхүү сэт нь хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ.'
        }]

      },
      {
       
        category: 'skincare',
        img: '/eye.jpeg',
        name: "Зовхины тос",
        price: 78000,
        brand: 'Obagi',
        skincare: [{
     
          category: 'skincare',
          img: '/eye.jpeg',
          name: "Зовхины тос",
          price: 78000,
          brand: 'Obagi',
          about: 'Үрчлээний эсрэг үйлдэлтэй, алтны орцтой тул таны зовхийг унжиж үрчлээтэхээс сэргийлнэ'
        }]
      },

      {
       
        category: 'skincare',
        img: '/hydration.jpeg',
        name: "Чийгшүүлэгч тос",
        price: 13000,
        brand: 'Obagi',
        skincare: [{
         
          category: 'skincare',
          img: '/hydration.jpeg',
          name: "Чийгшүүлэгч тос",
          price: 13000,
          brand: 'Obagi',
          about: 'Арьсанд гүн чийгшлийг өгнө, хүчилтөрөгч агуулсан тул таны арьсыг гэрэлтсэн толигор болгоно'
        }]
      },
      {
      
        category: 'skincare',
        img: '/mist.jpeg',
        name: "Нүүрний мист",
        price: 34000,
        skincare: [{
     
          category: 'skincare',
          img: '/mist.jpeg',
          name: "Нүүрний мист",
          price: 34000,
          about: 'Нүүрний арьсыг гүн чийгшүүлнэ',
          brand: 'Tatcha'
        }],
        brand: 'Tatcha'
      },

      {
        
        category: 'skincare',
        img: '/hel.jpeg',
        name: "Гиалуроны хүчил",
        price: 40000,
        skincare: [{
       
          category: 'skincare',
          img: '/hel.jpeg',
          name: "Гиалуроны хүчил",
          price: 40000,
          about: 'Арьсыг хамгаалж гүн тэжээл чийгшил үзүүлнэ',
          brand: 'Bye Bye'
        }],
        brand: 'Bye Bye'
      },
      {
       
        category: 'skincare',
        img: '/mist1.jpeg',
        name: "Нүүрний мист",
        price: 60000,
        skincare: [{
        
          category: 'skincare',
          img: '/mist1.jpeg',
          name: "Нүүрний мист",
          price: 60000,
          about: 'Арьсанд гүн чийгшлийг өгнө, хүчилтөрөгч агуулсан тул таны арьсыг гэрэлтсэн толигор болгоно',
          brand: 'Tatcha'
        }],
        brand: 'Tatcha'
      },
      {
       
        category: 'skincare',
        img: '/serum.jpeg',
        name: "Серум",
        price: 30000,
        skincare: [{
       
          category: 'skincare',
          img: '/serum.jpeg',
          name: "Серум",
          price: 30000,
          about: 'Арьсанд гүн чийгшлийг өгнө, хүчилтөрөгч агуулсан тул таны арьсыг гэрэлтсэн толигор болгоно',
          brand: 'Dahlia'
        }],
        brand: 'Dahlia'
      },

      {
        
        category: 'skincare',
        img: '/skinset.jpeg',
        name: "Хуурай арьсны ком",
        price: 150000,
        skincare: [{
         
          category: 'skincare',
          img: '/skinset.jpeg',
          name: "Хуурай арьсны ком",
          price: 150000,
          about: 'Хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ',
          brand: 'Neutrogena'
        }],
        brand: 'Neutrogena'
      },
      {
       
        category: 'skincare',
        img: '/body.jpeg',
        name: "Биеийн тос",
        price: 68000,
        skincare: [{
     
          category: 'skincare',
          img: '/body.jpeg',
          name: "Биеийн тос",
          price: 68000,
          about: 'Биеийн арьсыг зөөлрүүлж тэжээл өгч үйлчилнэ',
          brand: 'Dahlia'
        }],
        brand: 'Dahlia'
      },

      {
        
        category: 'skincare',
        img: '/bodylotion.jpeg',
        name: "Биеийн тос",
        price: 30000,
        skincare: [{
        
          category: 'skincare',
          img: '/bodylotion.jpeg',
          name: "Биеийн тос",
          price: 30000,
          about: 'Биеийн арьсыг зөөлрүүлж тэжээл өгч үйлчилнэ',
          brand: 'Dahlia'
        }],
        brand: 'Dahlia'
      },
      {
       
        category: 'skincare',
        img: '/cleanser.jpeg',
        name: "Нүүр цэвэрлэгч",
        price: 20000,
        skincare: [{
        
          category: 'skincare',
          img: '/cleanser.jpeg',
          name: "Нүүр цэвэрлэгч",
          price: 20000,
          about: 'Нүүрний арьсыг гүн цэвэрлэж тэжээл өгөх үйлдэлтэй',
          brand: 'Neutrogena'
        }],
        brand: 'Neutrogena'
      },

      {
        
        category: 'skincare',
        img: '/skin1.jpeg',
        name: "Үсний тэжээлийн тос",
        price: 33450,
        skincare: [{
       
          category: 'skincare',
          img: '/skin1.jpeg',
          name: "Үсний тэжээлийн тос",
          price: 33450,
          about: 'Үсэнд тэжээл өгч, гялалзсан зөөлөн болгоно. Үс уналтаас сэргийлэх үйлдэлтэй',
          brand: 'Yves Rocher'
        }],
        brand: 'Yves Rocher'
      },

      {
      
        category: 'skincare',
        img: '/skin2.jpeg',
        name: "Серум",
        price: 29000,
        skincare: [{
      
          category: 'skincare',
          img: '/skin2.jpeg',
          name: "Серум",
          price: 29000,
          about: 'Хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ',
          brand: 'Estee Lauder'
        }],
        brand: 'Estee Lauder'
      },
      {
        
        category: 'skincare',
        img: '/skin3.jpeg',
        name: "Хуурай арьсны ком",
        price: 12200,
        skincare: [{
        
          category: 'skincare',
          img: '/skin3.jpeg',
          name: "Хуурай арьсны ком",
          price: 12200,
          about: 'Хуурай арьсыг гүн чийгшүүлж тэжээл өгч үйлчилнэ',
          brand: 'Estee Lauder'
        }],
        brand: 'Estee Lauder'
      },
      {
       
        category: 'skincare',
        img: '/skin4.jpeg',
        name: "Үсний тос",
        price: 19400,
        skincare: [{
      
          category: 'skincare',
          img: '/skin4.jpeg',
          name: "Үсний тос",
          price: 19400,
          about: 'Үсэнд тэжээл өгч, гялалзсан зөөлөн болгоно. Үс уналтаас сэргийлэх үйлдэлтэй',
          brand: 'Estee Lauder'
        }],
        brand: 'Estee Lauder'
      },
      {
       
        category: 'skincare',
        img: '/skin5.jpeg',
        name: "Зовхины тос",
        price: 45000,
        skincare: [{
  
          category: 'skincare',
          img: '/skin5.jpeg',
          name: "Зовхины тос",
          price: 45000,
          about: 'Үрчлээний эсрэг үйлдэлтэй, алтны орцтой тул таны зовхийг унжиж үрчлээтэхээс сэргийлнэ',
          brand: 'Bye Bye'
        }],
        brand: 'Bye Bye'
      },
      {
        
        category: 'skincare',
        img: '/skin6.jpeg',
        name: "Нүүрний тос",
        price: 49400,
        skincare: [{
       
          category: 'skincare',
          img: '/skin6.jpeg',
          name: "Нүүрний тос",
          price: 49400,
          about: 'Нүүрний арьсыг нарны хэт ягаан туяанаас хамгаалж, гүн чийгшүүлж тэжээл өгч үйлчилнэ.',
          brand: 'Tatcha'
        }],
        brand: 'Tatcha'
      },
      {
       
        category: 'skincare',
        img: '/skin7.jpeg',
        name: "Чийгшүүлэгч",
        price: 21400,
        skincare: [{
       
          category: 'skincare',
          img: '/skin7.jpeg',
          name: "Чийгшүүлэгч",
          price: 21400,
          about: '24 цагийн турш таны арьсийг чийгшүүлнэ',
          brand: 'Neutrogena'
        }],
        brand: 'Neutrogena'
      },
      {
      
        category: 'skincare',
        img: '/skin8.jpeg',
        name: "Коллагентай тос",
        price: 59560,
        skincare: [{
      
          category: 'skincare',
          img: '/skin8.jpeg',
          name: "Коллагентай тос",
          price: 59560,
          about: 'Найрлагандаа коллаген агуулсан тул арьсыг тань хөгшрөлтөөс сэргийлнэ',
          brand: '24K'
        }],
        brand: '24K'
      },

      {
        
        category: 'skincare',
        img: '/skin9.jpeg',
        name: "Нүүрний тос",
        price: 32000,
        skincare: [{
         category: 'skincare',
          img: '/skin9.jpeg',
          name: "Нүүрний тос",
          price: 32000,
          about: 'Арьсанд тэжээл өгч үрчлээ үүсэхээс сэргийлнэ',
          brand: 'Estee Lauder'
        }],
        brand: 'Estee Lauder'
      },

      {
     
        category: 'skincare',
        img: '/skin10.jpeg',
        name: "Эссенз",
        price: 26000,
        skincare: [{
    
          category: 'skincare',
          img: '/skin10.jpeg',
          name: "Эссенз",
          price: 26000,
          about: 'Арьсыг хамгаалж гүн тэжээл чийгшил үзүүлнэ',
          brand: 'Revolution'
        }],
        brand: 'Revolution'
      },
      {
       
        category: 'skincare',
        img: '/skin11.jpeg',
        name: "Гиалуроны хүчил",
        price: 26000,
        skincare: [{
      
          category: 'skincare',
          img: '/skin11.jpeg',
          name: "Гиалуроны хүчил",
          price: 26000,
          about: 'Арьсыг хамгаалж гүн тэжээл чийгшил үзүүлнэ',
          brand: 'Revolution'
        }],
        brand: 'Revolution'
      },

      {
      
        category: 'skincare',
        img: '/skin12.jpeg',
        special:true,
        sale: '5% off',
        name: "Нүүрний тос",
        price: 23000,
        skincare: [{
       
          category: 'skincare',
          img: '/skin12.jpeg',
          special:true,
          sale: '5% off',
          name: "Нүүрний тос",
          price: 23000,
          about: 'Арьсанд тэжээл өгч үрчлээ үүсэхээс сэргийлнэ',
          brand: 'Obagi'
        }],
        brand: 'Obagi',
      }
    ]
    const result = await skincareModel.insertMany(newSkincares);
  

    res.json(result)

  } catch (err) {
    console.error(err);
    res.status(500).send('Error 500')
  }
});


router.get('/:_id', async (req, res) => {
  try {
      const skin = await skincareModel.findById(req.params._id);
      res.json(skin);
  } catch (err) {
      res.json({ message: err });
  }
});


module.exports = router