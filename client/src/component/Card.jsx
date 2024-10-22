import React from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';

const Card = ({ name, image, price, location, link }) => {
  return (
    <div className="cart-item">
      <Link to={link} className="cart-item-link">
        <img src={image} alt={name} className="cart-item-image" />
        <div className="cart-item-details">
          <h2 className="cart-item-name">{name}</h2>
          <p className="cart-item-price">${price}</p>
          <p className="cart-item-location">{location}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;