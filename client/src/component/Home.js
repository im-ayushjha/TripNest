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
import AddData from './AddData';

function Home() {
  // Array of image paths 
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <>
    <div className="gallery">
       {/* <img src={img1}/> */}
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={index + 1} />
        </div>
      ))}
    </div>
    <AddData />
    </>
  );

}

export default Home;
