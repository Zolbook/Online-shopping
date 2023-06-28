const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:3000/mydatabase4', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

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

}