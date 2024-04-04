const express = require('express');
const app = express();
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');
require('dotenv').config();



const bodyParser = require('body-parser');
const skincaresRouter = require('./scripts/skincareRoute');
const kidsclothesRouter = require('./scripts/kidclothesRoute');
const makeupsRouter = require('./scripts/makeupRoute');
const  menclothesRouter = require('./scripts/menclothesRoute');
const ringsRouter = require('./scripts/ringsRoute');
const womenRouter = require('./scripts/womenclothesRoute');
const earringsRouter = require('./scripts/chainRoute');
const warehouseRouter = require('./scripts/warehouse');

const passport = require('passport');
const { Order, mongoose, Cart, User, UserLocation, Warehouse,  DriverLocation, Driver} = require('./scripts/db');
app.use(express.json());
app.use(express.static('public'));


app.use(cors({
  origin: "http://localhost:3001",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.use(bodyParser.json());
app.use('/skincares', skincaresRouter);
app.use('/kidsclothes', kidsclothesRouter);
app.use('/makeups', makeupsRouter);
app.use('/MenCloth', menclothesRouter);
app.use('/Ring', ringsRouter);
app.use('/WomenCloth', womenRouter);
app.use('/Earrings', earringsRouter);
app.use('/api', warehouseRouter);

const admin = require('firebase-admin');


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




const CLIENT_ID = '990322735818-t36dfph7lkbh423d7qntomeqiaa5mmje.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: ['profile', 'email'],
  callbackURL: "http://localhost:5001/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
        user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            imageUrl: profile.photos[0].value
        });
        await user.save();
    }
    done(null, user);
} catch (error) {
    done(error, null);
}
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Session handling
app.use(session({
  secret: '28f3fd2260b792fc73d97764e37251005fd9577abefefc0ccc8f6f6442099b8cd199386f971388e216232fe8d76b52e6096895158fef613a3cf1939f213089f5',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: false } 
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { 
  scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
}));

function ensureAuthenticated(req, res, next) {
  
  if (req.isAuthenticated()) {
      return next();
  } else {
      console.log('User is not authenticated');
      return res.status(401).send('Unauthorized');
  }
}

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:3001/Home'); 
  }
);

app.get('/api/current_user', (req, res) => {
  if (req.isAuthenticated()) {

      res.json(req.user.toObject()); 
  } else {
      res.json({});
  }
});

app.post('/save-user-location', ensureAuthenticated, async (req, res) => {
  try {
      const { user, lat, lng } = req.body;  

     
      if (!user) {
          return res.status(400).send('User ID is required');
      }

      const userLocation = new UserLocation({
        user,  // Set the user field
        location: { type: "Point", coordinates: [lng, lat] }  
      });

      await userLocation.save();
      res.status(201).json('Location saved successfully');
  } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json('Error saving location');
  }
});




app.get('/user-location/:userId', async (req, res) => {
  try {
      const userLocation = await UserLocation.findOne({ user: req.params.userId });

      if (!userLocation) {
          return res.status(404).send('User location not found');
      }

      res.json(userLocation);
  } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching user location");
  }
});


app.get('/user-locations', async (req, res) => {
  try {
      const userLocations = await UserLocation.find();

      if (!userLocations.length) {
          return res.status(404).send('No user locations found');
      }

      res.json(userLocations);
  } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching user locations");
  }
});

app.get('/nearest-warehouse/:userId', async (req, res) => {

  if (!req.params.userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).send('Invalid User ID');
  }

  try {
      const userLocation = await UserLocation.findOne({ user: req.params.userId });
      if (!userLocation) {
          return res.status(404).send('User location not found');
      }

      const nearestWarehouse = await Warehouse.find({
          location: {
              $near: {
                  $geometry: userLocation.location,
              }
          }
      }).limit(1); 

      if (!nearestWarehouse.length) {
          return res.status(404).send('No warehouses found');
      }

      res.json(nearestWarehouse[0]);  
  } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching nearest warehouse");
  }
});
app.post('/update-location', async (req, res) => {
  const { userId, coordinates } = req.body;

  if (!userId || !coordinates || coordinates.some(coord => coord === null)) {
      return res.status(400).json({ error: 'Invalid data' });
  }

  try {
      const updatedLocation = await UserLocation.findOneAndUpdate(
          { user: userId }, 
          { $set: { location: { type: "Point", coordinates }}},
          { new: true, upsert: true }
      );
      io.emit('locationUpdate', updatedLocation);
      res.status(200).json(updatedLocation);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating location');
  }
});


const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.post('/registerDriver', async (req, res) => {

  console.log("Received data:", req.body);

  const { firebaseUid, name, email } = req.body;

  console.log(`Firebase UID: ${firebaseUid}`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);

  try {
      const newDriver = new Driver({ firebaseUid, name, email });

   
      console.log('Preparing to save new driver:', newDriver);

      await newDriver.save();

    
      console.log('New driver saved:', newDriver);

      res.status(201).json({ message: 'Driver registered successfully' });
  } catch (error) {

      console.error('Error in /registerDriver:', error);
      res.status(500).send('Error registering driver');
  }
});



app.post('/driver-registered', async (req, res) => {
  const driverId = req.body.driverId;
  console.log(`Driver registered or logged in: ${driverId}`);



  res.status(200).send('Driver registration or login acknowledged');
});

app.get('/drivers', async (req, res) => {
  try {
      const drivers = await Driver.find();
      res.status(200).json(drivers);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving drivers');
  }
});

app.get('/driver/:firebaseUid', async (req, res) => {
  try {
      const driver = await Driver.findOne({ firebaseUid: req.params.firebaseUid });
      if (driver) {
          res.status(200).json(driver);
      } else {
          res.status(404).send('Driver not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving driver');
  }
});

app.get('/river-to-warehouse/:warehouseId', async (req, res) => {
  try {
      const warehouse = await Warehouse.findOne({ _id: req.params.warehouseId });
      if (!warehouse) {
          return res.status(404).send('Warehouse not found');
      }

      const nearestDriver = await DriverLocation.findOne({
          location: {
              $near: {
                  $geometry: warehouse.location,
              }
          }
      }).limit(1);

      if (!nearestDriver) {
          return res.status(404).send('No drivers found');
      }

      res.json(nearestDriver);
  } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching nearest driver to warehouse");
  }
});

const driverAvailability = {};
const driverSockets = {};

app.post('/update-driver-availability', async (req, res) => {
  const { firebaseUid, availability } = req.body;

  if (!firebaseUid) {
      return res.status(400).send('Firebase UID is required');
  }

  try {
      const driver = await Driver.findOne({ firebaseUid: firebaseUid });
      if (!driver) {
          return res.status(404).send('Driver not found');
      }

      await DriverLocation.findOneAndUpdate(
          { driver: driver._id },
          { $set: { availability: availability } },
          { new: true }
      );

    
      driverAvailability[firebaseUid] = availability;

      res.status(200).send('Availability updated successfully');
  } catch (error) {
      console.error('Error updating driver availability:', error);
      res.status(500).send('Error occurred while updating availability');
  }
});




io.on('connection', (socket) => {
  console.log('A user connected');

   socket.on('registerDriver', (firebaseUid) => {
        console.log(`Registering driver with UID: ${firebaseUid}`);
        driverSockets[firebaseUid] = socket;
    });

  socket.on('updateDriverAvailability', async (data) => {
    const { driverId, isAvailable } = data; 

    if (driverId) {
        driverAvailability[driverId] = isAvailable;

        console.log(`Driver availability updated for ${driverId}: ${isAvailable}`);
    }
});


  socket.on('driverLocation', async (data) => {
      const { firebaseUid, lat, lng } = data;
   
  });

  socket.on('disconnect', () => {
      const driverId = socket.driverId;
      if (driverId) {
          driverAvailability[driverId] = false;
          console.log(`Driver ${driverId} disconnected`);
      }
  });
});


app.get('/assign-nearest-driver', async (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
      console.log('User ID not provided');
      return res.status(400).send('User ID is required');
  }

  try {
      console.log(`Finding location for user ID: ${userId}`);
      const userLocation = await UserLocation.findOne({ user: userId });
      if (!userLocation) {
          console.log('User location not found');
          return res.status(404).send('User location not found');
      }

      console.log(`Finding nearest warehouse to user's location`);
      const nearestWarehouse = await Warehouse.findOne({
          location: {
              $near: {
                  $geometry: userLocation.location
              }
          }
      });

      if (!nearestWarehouse) {
          console.log('No nearby warehouse found');
          return res.status(404).send('No nearby warehouse found');
      }

      console.log(`Finding nearest available driver to the warehouse`);
      const nearestAvailableDriver = await DriverLocation.findOne({
          location: {
              $near: {
                  $geometry: nearestWarehouse.location
              }
          },
          availability: true
      }).populate('driver', 'firebaseUid')
      .limit(1);

      if (!nearestAvailableDriver) {
          console.log('No available drivers found near the warehouse');
          return res.status(404).send('No available drivers found near the warehouse');
      }

      const firebaseUid = nearestAvailableDriver.driver.firebaseUid;
      console.log(`Notifying driver with Firebase UID: ${firebaseUid}`);
      const availableDriverSocket = driverSockets[firebaseUid];

      if (availableDriverSocket && availableDriverSocket.connected) {
          availableDriverSocket.emit('newAssignment', 'You have a new delivery assignment!');
          console.log(`Notification sent to driver with Firebase UID: ${firebaseUid}`);
          res.status(200).send('Driver successfully notified');
      } else {
          console.log(`Driver socket not found or not connected for Firebase UID: ${firebaseUid}`);
          res.status(404).send('Driver socket not found or not connected');
      }
  } catch (error) {
      console.error('Error in assigning driver:', error);
      res.status(500).send('Error occurred while assigning driver');
  }
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));