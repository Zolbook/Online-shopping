const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27019/mydatabase11', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000 
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});


mongoose.connection.on('error', (err) => {
    console.error('Connection error:', err);
});


mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

const skincareSchema = new mongoose.Schema({
  
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: true
    }
},{ _id: true })

const allSkinCareSchema = new mongoose.Schema({
 
    img: {
        type: String,
        required: true
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },

    skincare: {
        type: [skincareSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});



const skincareModel = mongoose.model('skincareModel', allSkinCareSchema);


const kidclothSchema = new mongoose.Schema({
  
    img: {
        type: String,
        required: true
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{ _id: true });

const kidclothesSchema = new mongoose.Schema({
 
    img: {
        type: String,
        required: true
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    kidclothes: {
        type: [kidclothSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const kidclothes = mongoose.model('kidclothes', kidclothesSchema);

const womenclothSchema = new mongoose.Schema({
   
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{ _id: true });
const womenclothesSchema = new mongoose.Schema({
  
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    womencloth: {
        type: [womenclothSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    } 
});
 
const womenclothes = mongoose.model('womenclothes', womenclothesSchema);

const menclothSchema = new mongoose.Schema({
  
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
        
    }
},{ _id: true });
const menclothesSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    mencloth: {
        type: [menclothSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const menclothes = mongoose.model('menclothes', menclothesSchema);

const mkeupSchema = new mongoose.Schema({
 
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{ _id: true });
const mkeupSchema1 = new mongoose.Schema({
  
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    makeup: {
        type: [mkeupSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const makeupCollection = mongoose.model('makeupCollection', mkeupSchema1);
const ringSchema = new mongoose.Schema({

    img: {
        type: String,
        required: true
    },
    sale: {
        type: String,
        default: null
    },
    special: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{ _id: true });
const ringsSchema = new mongoose.Schema({
    
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    ring: {
        type: [ringSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const rings = mongoose.model('rings', ringsSchema);

const chainSchema = new mongoose.Schema({
  
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{ _id: true });
const chainsSchema = new mongoose.Schema({
    
    img: {
        type: String,
        required: true
    },
    special: {
        type: Boolean,
        default: false
    },
    sale: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    chain: {
        type: [chainSchema],
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});
const chains = mongoose.model('chains', chainsSchema);



const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required:true
    },
});

  
const Cart = mongoose.model('Cart', cartSchema);

const orderSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  });
  
  const Order = mongoose.model('Order', orderSchema);
  
  
  const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: String,
    picture: String
});

const User = mongoose.model('User', userSchema);
const userLocationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
userLocationSchema.index({ location: '2dsphere' });
const UserLocation = mongoose.model('UserLocation', userLocationSchema);



const warehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: {
            type: String, 
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number], 
            required: true
        }
    },
   
});

warehouseSchema.index({ location: '2dsphere' });

const Warehouse = mongoose.model('Warehouse', warehouseSchema);

const driverSchema = new mongoose.Schema({
    firebaseUid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
   
});

const Driver = mongoose.model('Driver', driverSchema);


const DriverLocationSchema = new mongoose.Schema({
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Driver',
      required: true
    },
    location: {
      type: { type: String, enum: ['Point'], required: true },
      coordinates: { type: [Number], required: true } 
    },
    availability: Boolean,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  DriverLocationSchema.index({ location: '2dsphere' });

const DriverLocation = mongoose.model('DriverLocation', DriverLocationSchema);
module.exports = {
    skincareModel,
    mongoose,
    Cart,
    kidclothes,
    womenclothes,
    makeupCollection,
    rings,
    chains,
    menclothes,
    Order, 
    User,  Warehouse, UserLocation, Driver, DriverLocation

}