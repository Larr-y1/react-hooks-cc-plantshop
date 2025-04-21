import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, onUpdatePlant }) {

  return (
    <ul className="cards">
    {plants.length === 0 ? (
      <p>No plants found. Add one to get started!</p>
    ) : (
      plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant}  onDeletePlant={onDeletePlant} onUpdatePlant={onUpdatePlant}/>
      ))
    )}
  </ul>
   
  );
}

export default PlantList;
