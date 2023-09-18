// src/components/PropertyDetail.js

import React from 'react';

function PropertyDetail({ property }) {
  return (
    <div className="property-detail">
      <h2>Property Details</h2>
      <h3>{property.name}</h3>
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

export default PropertyDetail;
