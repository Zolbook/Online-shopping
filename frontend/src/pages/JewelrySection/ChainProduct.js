import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { DataContext } from '../../Context';
import { IconCheckbox } from "react-icon-checkbox";

export default function ChainProduct (){
  const [chainProducts, setChainProduct] = useState([]);
    const {_id} = useParams();
    const { handleChange, addCart,
      handleClick, handleChangeCart, cartArray, handleClickCart, checkedArray, onAdd, onRemove, cartItems } = useContext(DataContext);
 
   

    useEffect(() => {
        console.log(_id);
        axios.get(`${process.env.REACT_APP_API_URI}/Earrings/${_id}`)
          .then((res) => {
            setChainProduct(res.data.chain);
          })
          .catch((err) => console.error(err));
      }, [_id]);
      
      
      console.log(chainProducts);
      

      if (!chainProducts) {
        return <div>...Loading</div>;
      }
      
      return (
        <>
          <div className="row">
            {chainProducts.map((p) => (
              <div className="col-5" key={p._id}>
                <img className="productImages" src={`${process.env.REACT_APP_API_URI}${p.img}`} alt={p.name} />
                <h6>{p.name}</h6>
                <h6>{p.price}₮</h6>
                <p>{p.about}</p>
                <div className='row align-items-start' >

<div className='col-4' key={p._id} value={p._id} onClick={() => handleClick(p)} >


  <IconCheckbox
    onClick={handleChange(p._id)}
    checked={checkedArray.includes(p._id)}
    checkedIcon={<i className='fas fa-heart text-danger'></i>}
    uncheckedIcon={<i id='heart' className='fas fa-heart text-muted'><span id="text" >Хадгалах</span></i>}
  />

</div>
<div className='col-5' value={p._id} onClick={() => handleClickCart(p)}>
  <IconCheckbox
    onClick={handleChangeCart(p._id)}
    checked={cartArray.includes(p._id)}
    checkedIcon={<i  className="fas fa-cart-arrow-down text-danger fa-md"></i>}
    uncheckedIcon={<i id='addBasket' className="fas fa-cart-arrow-down fa-md"><span id='addCartText'>Сагслах</span></i>}
  />
</div>

</div>
              </div>
            ))}
          </div>
        </>
      );
      
}
