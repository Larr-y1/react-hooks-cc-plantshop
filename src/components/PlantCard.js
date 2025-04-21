import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const [inStock, setInStock] = useState(true); 
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  const handleToggleStock = () => {
    setInStock(!inStock);
  };

  const handlePriceSave = async () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((r) => r.json())
      .then((newPlant) => {
        onUpdatePlant(newPlant);
      });
  };
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      
      
      {isEditingPrice ? (
        <>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            style={{ width: "100px", marginRight: "10px" }}
          />
          <button onClick={handlePriceSave}>Save</button>
        </>
      ) : (
        <>
          <p>Price: {plant.price}</p>
          <button onClick={() => setIsEditingPrice(true)}>Edit Price</button>
        </>
      )}

      {inStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
