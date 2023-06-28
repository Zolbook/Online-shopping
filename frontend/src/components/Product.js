import React, {useState} from "react";
import { IconCheckbox } from "react-icon-checkbox";



export default function Product(props) {
    const {product, handleChange, handleClick, handleChangeCart, cartArray, handleClickCart, checkedArray} = (props);

  

    return(
        <div className="kid" key={product._id}>
            <div className="products">
            <a href={product.more}><img className="productImages" alt={product.name} src={product.url}/></a>
            <h6>{product.name}</h6>
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
    uncheckedIcon={<i id='addBasket' >Сагсанд нэмэх</i>}
  />
</div>

</div>

          
          
  </div>

        </div>
    );
}