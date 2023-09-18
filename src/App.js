// src/App.js

import React, { useState } from 'react';
import './App.css';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Joanna Apartments',
      location: 'Bandra West',
      price: '₹ 6 CRORE',
      description: '"Joanna Apartments: A charming urban oasis in the heart of the city, offering comfort and convenience for modern living."',
      contactNumber: '123-456-7890',
    },
    // ... other properties ...
  ]);

  const [displayForm, setDisplayForm] = useState(false);

  const handleAddProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
    setDisplayForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real Estate Listings by Nitai</h1>
      </header>
      <main>
        <button onClick={() => setDisplayForm(!displayForm)}>
          {displayForm ? 'Hide Form' : 'Add New Property'}
        </button>
        {displayForm && <PropertyForm onAddProperty={handleAddProperty} />}
        <PropertyList properties={properties} />
      </main>
    </div>
  );
}

export default App;
