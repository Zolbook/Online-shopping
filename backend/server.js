const express = require('express');
const app = express();
const cors = require('cors');
const skincaresRouter = require('./scripts/skincareRoute');
const kidsclothesRouter = require('./scripts/kidclothesRoute');
const makeupsRouter = require('./scripts/makeupRoute');
const  menclothesRouter = require('./scripts/menclothesRoute');
const ringsRouter = require('./scripts/ringsRoute');
const womenRouter = require('./scripts/womenclothesRoute');
const earringsRouter = require('./scripts/chainRoute');
const { mongoose, Cart} = require('./scripts/db');
app.use(express.json());
app.use(express.static('public'));
app.use(cors());



app.use('/skincares', skincaresRouter);
app.use('/kidsclothes', kidsclothesRouter);
app.use('/makeups', makeupsRouter);
app.use('/MenCloth', menclothesRouter);
app.use('/Ring', ringsRouter);
app.use('/WomenCloth', womenRouter);
app.use('/Earrings', earringsRouter);

  


app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/api/cart', async (req, res) => {
  try {
    const { productId, name, price } = req.body.product;

 
    const existingProduct = await Cart.findOne({ productId, name });

    if (existingProduct) {

      existingProduct.quantity += 1;
      await existingProduct.save();
      res.status(200).json('Cart item updated successfully');
    } else {
 
      const newProduct = new Cart({
        productId,
        name,
        price,
        quantity: 1,
      });

      await newProduct.save();
      res.status(201).json('Cart item saved successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Error saving cart item');
  }
});




app.put('/api/cart/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const { quantity } = req.body;

    if (typeof quantity !== 'number') {
      return res.status(400).json({ message: 'Invalid quantity value' });
    }

    const cartItem = await Cart.findOne({ productId });
    if (!cartItem) {
      res.status(404).json({ message: `Cart item with productId ${productId} not found` });
    } else {
      cartItem.quantity = quantity;
      await cartItem.save();
      res.status(200).json(cartItem);
    }
  } catch (error) {
    console.error(error);  
    res.status(500).json({ message: 'Error updating cart item quantity' });
  }
});




app.delete('/api/cart/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const result = await Cart.deleteOne({ productId });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: `Cart item with productId ${productId} not found` });
      return;
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting cart item' });
  }
});


app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving cart items');
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));