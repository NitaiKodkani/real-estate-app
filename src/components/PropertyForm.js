// src/components/PropertyForm.js

import React, { useState } from 'react';

function PropertyForm({ onAddProperty }) {
  const [newProperty, setNewProperty] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
    contactNumber: '', // Add contact number field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty(newProperty);
    setNewProperty({
      name: '',
      location: '',
      price: '',
      description: '',
      contactNumber: '', // Reset contact number field
    });
  };

  return (
    <div className="property-form">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newProperty.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={newProperty.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={newProperty.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={newProperty.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number:</label> {/* Add contact number input */}
          <input type="text" name="contactNumber" value={newProperty.contactNumber} onChange={handleChange} required />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default PropertyForm;
