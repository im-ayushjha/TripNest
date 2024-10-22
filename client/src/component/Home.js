// src/Home.js
import React from 'react';
import './Home.css'; // Import your CSS file
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'
import image5 from '../images/image5.jpeg'
import image6 from '../images/image6.jpeg'
import image7 from '../images/image7.jpeg'
import image8 from '../images/image8.jpeg'
import image9 from '../images/image9.jpeg'
import image10 from '../images/image10.jpeg'
import image11 from '../images/image11.jpeg'
import image12 from '../images/image12.jpeg'
// import AddData from './AddData';
import CardItem from './Card';

function Home() {
  // Array of image paths 
  const images = [
    {
      name: 'Four Seasons',
      image: image1,
      price: 29.99,
      location: 'Mumbai, MH',
      link: '/item1'
    },
    {
      name: 'Hyatt',
      image: image2,
      price: 49.99,
      location: 'Delhi, DL',
      link: '/item2'
    },
    {
      name: 'Best Western',
      image: image3,
      price: 19.99,
      location: 'Bengaluru, KA',
      link: '/item3'
    },
    {
      name: 'Wyndham Hotels & Resorts',
      image: image4,
      price: 34.99,
      location: 'Hyderabad, TS',
      link: '/item4'
    },
    {
      name: 'JW Marriott',
      image:image5,
      price: 24.99,
      location: 'Ahmedabad, GJ',
      link: '/item5'
    },
    {
      name: 'Diamondring Resort',
      image:image6,
      price: 39.99,
      location: 'Chennai, TN',
      link: '/item6'
    },
    {
      name: 'Hotel The Park View',
      image: image7,
      price: 29.99,
      location: 'Kolkata, WB',
      link: '/item7'
    },
    {
      name: 'HOTEL UR',
      image:image8,
      price: 44.99,
      location: 'Pune, MH',
      link: '/item8'
    },
    {
      name: 'Hotel Yatrik',
      image: image9,
      price: 54.99,
      location: 'Jaipur, RJ',
      link: '/item9'
    },
    {
      name: 'Hotel Four View Grand',
      image:image10,
      price: 59.99,
      location: 'Lucknow, UP',
      link: '/item10'
    },
    {
      name: 'Hotel Prayag Inn',
      image:image11,
      price: 64.99,
      location: 'Kanpur, UP',
      link: '/item11'
    },
    {
      name: 'Hotel Hira Inn',
      image: image12,
      price: 74.99,
      location: 'Nagpur, MH',
      link: '/item12'
    }
];

  return (
    <>
    <div className="cart">
          {images.map((item, index) => (
            <CardItem
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              location={item.location}
              link={item.link}
            />
          ))}
        </div>
    </>
  );

}

export default Home;
