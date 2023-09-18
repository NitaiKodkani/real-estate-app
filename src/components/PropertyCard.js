// src/components/PropertyCard.js

import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="property">
      <h2>{property.name}</h2>
      <p>
        <strong>Location:</strong> {property.location}
      </p>
      <p>
        <strong>Price:</strong> {property.price}
      </p>
      <p>
        <strong>Contact Number:</strong> {property.contactNumber}
      </p>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyCard;
