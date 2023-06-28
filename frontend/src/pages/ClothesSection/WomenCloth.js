import React, {useContext, useEffect, useState} from "react";
import { DataContext } from "../../Context";
import { IconCheckbox } from "react-icon-checkbox";
import { Link } from "react-router-dom";
export default function WomenCloth(){

    const{handleChange, handleClick, handleChangeCart, cartArray, handleClickCart, checkedArray, womenClothes}=useContext(DataContext);




    return(
<div className="kid">
        {womenClothes.map((product) => (
         <div className='products' key={product._id}>
          <Link to={`/WomenCloth/${product._id}`}>
          <img className="productImages" src={`${process.env.REACT_APP_API_URI}${product.img}`}/>
          <h6>{product.name}</h6></Link>
          <h6>{product.price}₮</h6>
             <div className='row align-items-start' >

<div className='col-4' key={product._id} value={product._id} onClick={() => handleClick(product)} >


  <IconCheckbox
    onClick={handleChange(product._id)}
    checked={checkedArray.includes(product._id)}
    checkedIcon={<i className='fas fa-heart text-danger'></i>}
    uncheckedIcon={<i id='heart' className='fas fa-heart text-muted'><span id="text" >Хадгалах</span></i>}
  />

</div>
<div className='col-5' value={product._id} onClick={() => handleClickCart(product)}>
  <IconCheckbox
    onClick={handleChangeCart(product._id)}
    checked={cartArray.includes(product._id)}
    checkedIcon={<i  className="fas fa-cart-arrow-down text-danger fa-md"></i>}
    uncheckedIcon={<i id='addBasket' className="fas fa-cart-arrow-down fa-md"><span id='addCartText'>Сагслах</span></i>}
  />
</div>

</div>
         </div>
         
        ))}
      </div>

)
}