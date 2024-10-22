import React, { useState } from 'react';
import axios from 'axios';

function AddData() {
  const [formData, setFormData] = useState({
    imgURL: null, // Start as null for file
    hotelName: '',
    location: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      // Handle file input
      setFormData({ ...formData, imgURL: files[0] }); // Store the file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate price to be a number and greater than or equal to 0
    if (isNaN(formData.price) || Number(formData.price) < 0) {
      alert('Price must be a valid number and cannot be negative.');
      return;
    }

    // Create a FormData object to handle file uploads
    const data = new FormData();
    data.append('imgURL', formData.imgURL);
    data.append('hotelName', formData.hotelName);
    data.append('location', formData.location);
    data.append('price', formData.price);

    // Send form data to your backend API using Axios
    try {
      const response = await axios.post('/api/hotels', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });

      if (response.status === 201) {
        alert('Hotel added successfully!');
        setFormData({ imgURL: null, hotelName: '', location: '', price: '' });
      } else {
        alert('Error adding hotel.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Image URL:</label>
        <input
          type="file"
          name="imgURL"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Hotel Name:</label>
        <input
          type="text"
          name="hotelName"
          value={formData.hotelName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <button type="submit">Add Hotel</button>
    </form>
  );
}

export default AddData;
