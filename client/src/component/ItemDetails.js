import React from 'react';
import { useLocation } from 'react-router-dom';
// import BookingForm from './BookingForm';
import './ItemDetail.css';

const ItemDetail = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.name} className="item-detail-image" />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <p>Location: {item.location}</p>
        <p>Description: {item.description}</p>
        <p>Offers: {item.offers}</p>
        {/* <BookingForm itemId={item.id} /> */}
      </div>
    </div>
  );
};

export default ItemDetail;