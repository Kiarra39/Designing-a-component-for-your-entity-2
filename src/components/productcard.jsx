// write product card here
import React from 'react';
import ProductButton from './button.jsx'; 

const Productcard = () => {
    const image = 'https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg'; 
    const name = 'Headphones';
    const price = '2,500';
  
    return (
      <div className="product-card">
        <img src={image} alt={name} className="product-image"  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}  />
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <ProductButton />
      </div>
    );
  };

export default Productcard;
