import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import xor from 'lodash/xor';
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [checked, setChecked] = useState(() => {
    const save = localStorage.getItem('key');
    if (save) {
      return JSON.parse(save);
    } else {
      return []
    }
  });

  const addFav = async (product) => {
    const exist = favoritePr.find((x) => x.__id=== product._id);
    if (exist) {
      const updatedFavorites = favoritePr.map((x) =>
        x.__id=== product.___id? { ...exist, quantity: exist.quantity + 1 } : x
      );
      setFavoritePr(updatedFavorites);
      try {
        await axios.put(`${process.env.REACT_APP_API_URI}${product._id}`, { quantity: exist.quantity + 1 });
      } catch (error) {
        console.log(error);
      }
    } else {
      const newFavorites = [...favoritePr, { ...product, quantity: 1 }];
      setFavoritePr(newFavorites);
      try {
        await axios.post('/api/favorites', { product });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFav = async (product) => {
    const exist = favoritePr.find((x) => x.__id=== product._id);
    if (exist.quantity === 1) {
      const updatedFavorites = favoritePr.filter((x) => x.__id!== product._id);
      setFavoritePr(updatedFavorites);
      try {
        await axios.delete(`${process.env.REACT_APP_API_URI}${product._id}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      const updatedFavorites = favoritePr.map((x) =>
        x._id=== product._id? { ...exist, quantity: exist.quantity - 1 } : x
      );
      setFavoritePr(updatedFavorites);
      try {
        await axios.put(`${process.env.REACT_APP_API_URI}/api/favorites/${product._id}`, { quantity: exist.quantity - 1 });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const favDelete = (_id) => {
    setFavoritePr(favoritePr.filter((p) => {
      return p.__id!== _id
    }));
  }
  const [favoritePr, setFavoritePr] = useState(() => {
    const savedPr = localStorage.getItem('data');
    if (savedPr) {
      return JSON.parse(savedPr);
    } else {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(favoritePr));
  }, [favoritePr]);

  const handleChange = _id=> () => {
    setChecked(prev => xor(prev, [_id]));
  };

  const checkedArray = JSON.stringify(checked)

  const handleClick = (favProduct) => {
    if (checkedArray.includes(favProduct.id)) {
      favDelete(favProduct.id);

    } else {
      addFav(favProduct);

    }
  }



  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const fetchNewPr = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/newProducts`);
      const data = await response.json();
      setNewProducts(data)
    }
    fetchNewPr()
  }, [])



  const [skincare, setSkincare] = useState([]);
  useEffect(() => {
    const fetchSkincare = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/skincares`);
      const data = await response.json();
      setSkincare(data);
    };

    fetchSkincare();
  }, []);


  const [kidClothes, setKidsClothes] = useState([]);
  useEffect(() => {
    const fetchKidsClothes = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/kidsclothes`);
      const data = await response.json();
      setKidsClothes(data);
    }
    fetchKidsClothes()
  }, []);


  const [menclothes, setMenClothes] = useState([]);


  useEffect(() => {
    const fetchMenCloth = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/MenCloth`);
      const data = await response.json();
      setMenClothes(data);
    };

    fetchMenCloth();
  }, []);


  const [womenClothes, setWomenClothes] = useState([]);
  useEffect(() => {
    const fetchWomenClothes = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/WomenCloth`);
      const data = await response.json();
      setWomenClothes(data);
    }
    fetchWomenClothes()
  }, []);

  const [chains, setChains] = useState([]);
  useEffect(() => {
    const fetchChains = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/Earrings`);
      const data = await response.json();
      setChains(data);
    }
    fetchChains()
  }, []);

  const [rings, setRings] = useState([]);
  useEffect(() => {
    const fetchRings = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/Ring`);
      const data = await response.json();
      setRings(data);
    }
    fetchRings()
  }, []);

  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    const fetchMakeup = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/makeups`);
      const data = await response.json();
      setMakeup(data);
    };

    fetchMakeup();
  }, []);





  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('datakey');
  
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        if (Array.isArray(parsedData)) {
          setCartItems(parsedData);
        } else {
          console.error('Error: Cart items retrieved from localStorage is not an array');
          setCartItems([]);
        }
      } catch (error) {
        console.error('Error parsing cart items from localStorage', error);
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('datakey', JSON.stringify(cartItems));
  }, [cartItems]);
  
  
  
  const onAdd = async (product) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/api/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: { productId: product._id, name: product.name, price: product.price, quantity: 1 } }),
      });
      if (response.ok) {
        const updatedItems = cartItems.map((item) => {
          if (item.product._id === product._id) {
            return { product: item.product, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        const existingProduct = updatedItems.find((item) => item.product._id === product._id);
        if (!existingProduct) {
          updatedItems.push({ product, quantity: 1 });
        }
        setCartItems(updatedItems);
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const onRemove = async (product) => {
    let existingProduct;
    try {
      existingProduct = cartItems.find((item) => item.product._id === product._id);
  
      if (!existingProduct) {
        console.error(`Error: product ${product._id} not found in cart`);
        return;
      }
  
      const updatedQuantity = existingProduct.quantity - 1;
  
      if (updatedQuantity === 0) {
        // remove item from cart
        const updatedItems = cartItems.filter((item) => item.product._id !== product._id);
        setCartItems(updatedItems);
      } else {
        // update item quantity
        const updatedItems = cartItems.map((item) => {
          if (item.product._id === product._id) {
            return { product: item.product, quantity: updatedQuantity };
          } else {
            return item;
          }
        });
        setCartItems(updatedItems);
      }
  
      // send API request to update cart item
      const response = await fetch(`${process.env.REACT_APP_API_URI}/api/cart/${product._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: updatedQuantity }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to remove item from cart: ${errorMessage}`);
      }
    } catch (error) {
      console.error(error);
      // show error message and revert UI to previous state if server-side update fails
      alert('Failed to update cart. Please try again.');
      setCartItems(prevItems => {
        return prevItems.map(item => {
          if (item.product._id === product._id) {
            return { product: item.product, quantity: existingProduct.quantity };
          } else {
            return item;
          }
        });
      });
    }
  };
  
  
 
  
  const onDelete = async (_id) => {
    console.log('onDelete called with id:', _id);
    let response = null;
    try {
      response = await fetch(`${process.env.REACT_APP_API_URI}/api/cart/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setCartItems((prevCartItems) => {
          const newCartItems = Array.isArray(prevCartItems) ? prevCartItems.filter((item) => item.product._id!== _id) : [];
          localStorage.setItem('datakey', JSON.stringify(newCartItems));
          return newCartItems;
        });
      } else {
        throw new Error('Failed to delete item from cart');
      }
    } catch (error) {
      console.error(error);
      if (response) {
        const responseText = await response.text();
        console.error(responseText);
      }
    }
  };
  


  const [addCart, setAddCart] = useState(() => {
    const saved1 = localStorage.getItem('cart');
    if (saved1) {
      return JSON.parse(saved1)
    } else {
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addCart))
  }, [addCart])

  const handleChangeCart = _id=> () => {
    setAddCart(prev => xor(prev, [_id]));
  }

  const cartArray = JSON.stringify(addCart);

  const handleClickCart = (caProduct) => {
    if (addCart.includes(caProduct._id)) {
      onDelete(caProduct._id)
    } else {
      onAdd(caProduct)
    }
  }


  
  const values = {
    onAdd, onRemove, onDelete,
    favDelete, removeFav, addFav, favoritePr, setFavoritePr, handleChange, checked, handleClick, cartArray,
    checkedArray, handleChangeCart, handleClickCart, cartItems, setCartItems, makeup, skincare,
    kidClothes, menclothes, womenClothes, rings, chains, newProducts, addCart
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
