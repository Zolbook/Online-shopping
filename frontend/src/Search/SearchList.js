import React from 'react';
import Card from './Card';

function SearchList({  filteredProduct1,filteredProduct2, 
    filteredProduct4, filteredProduct5, filteredProduct6, filteredProduct7, filteredProduct8  }) {
  const filtered = [ 
                   filteredProduct1.map(product =>  <Card key={product.id} product={product} />),
                   filteredProduct2.map(product =>  <Card key={product.id} product={product} />),
                   filteredProduct4.map(product =>  <Card key={product.id} product={product} />),
                   filteredProduct5.map(product =>  <Card key={product.id} product={product} />),
                   filteredProduct6.map(product =>  <Card key={product.id} product={product} />),
                   filteredProduct7.map(product =>  <Card key={product.id} product={product} />),
                   filteredProduct8.map(product =>  <Card key={product.id} product={product} />)
                ]
  
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;