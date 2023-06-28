import React from 'react';

const urls = {
  makeup: '/makeups',
  skincare: '/skincares',
  kidClothes: '/kidsclothes',
  menclothes: '/MenCloth',
  womenClothes: '/WomenCloth',
  rings: '/Ring',
  chains: '/Earrings'
}

function Card({ product }) {

  const url = urls[product.category]

  return (
    <div>
      <a href={`${url}/${product._id}`}><img style={{ height: '99px', width: '100px', marginLeft: '50px' }} alt={product.name}
        src={`${process.env.REACT_APP_API_URI}${product.img}`} />    </a>
        <div>
          <h2 style={{ fontSize: '15px', fontWeight: 'normal', marginLeft: '50px' }}>{product.name}</h2>
        </div>
  
    </div>
  );
}

export default Card;
