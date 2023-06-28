
import React from 'react';
import { IconCheckbox } from "react-icon-checkbox";
const urls = {
  makeup: '/makeups',
  skincare: '/skincares',
  kidClothes: '/kidsclothes',
  menclothes: '/MenCloth',
  womenClothes: '/WomenCloth',
  rings: '/Ring',
  chains: '/Earrings'

}
export default function CarouselProduct(props) {
  const { caProduct, onAdd1,
    favProduct, handleChange, handleClick, checkedArray, handleChangeCart, handleClickCart, cartArray } = props;

    const url = urls[caProduct.category]
  return (
<div className={`card ${caProduct.special ? 'special' : ''}`}>
  <div className="favoriteButton" key={favProduct._id} value={favProduct._id} onClick={() => handleClick(favProduct)}>
    <IconCheckbox
      onClick={handleChange(favProduct._id)}
      checked={checkedArray.includes(favProduct._id)}
      checkedIcon={<i className="fas fa-heart text-danger"></i>}
      uncheckedIcon={<i id="heart" className="fas fa-heart text-muted"></i>}
    />
  </div>

  <a href={`${url}/${caProduct._id}`} className="product-link">
    <div className="product-overlay">{caProduct.sale} </div>
    <img className="product--image" src={`${process.env.REACT_APP_API_URI}${caProduct.img}`} alt="product image" />
    <h6>{caProduct.name} {caProduct.price}₮</h6>
    <hr />
  </a>

  <div className="d-flex justify-content-center mb-3" value={caProduct._id} onClick={() => handleClickCart(caProduct)}>
    <IconCheckbox
      onClick={handleChangeCart(caProduct._id)}
      checked={cartArray.includes(caProduct._id)}
      checkedIcon={<i type="button" className="btn btn-danger btn-sm btn-custom" id="checkedBasket">Сагсанд нэмэх</i>}
      uncheckedIcon={<i type="button" className="btn btn-outline-danger btn-sm btn-custom-outline" id="addBasket">Сагсанд нэмэх</i>}
    />
  </div>
</div>


  )
}
