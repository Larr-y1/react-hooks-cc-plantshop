import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('  http://localhost:6001/plants')
    .then(response => response.json())
    .then(plants => setPlants(plants))
  }, []);

  
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleDeletePlant = (id)  => {
    const updatedPlant = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlant);
  }

  const handleUpdatePlant = (updatedPlant) => {
    const updated = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updated);
  };

  console.log(plants)
  return (
    <div className="app">
      <Header />
      <PlantPage  plants={plants}  onAddPlant={handleAddPlant} onDeletePlant={handleDeletePlant} onUpdatePlant={handleUpdatePlant}/>
    </div>
  );
}

export default App;
