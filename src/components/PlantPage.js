import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onDeletePlant, onUpdatePlant }) {
  const [search, setSearch] = useState("");

  const handleSearch = (term) => {
    setSearch(term.toLowerCase());
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search)
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search search={search} onSearch={handleSearch} />
      <PlantList plants={filteredPlants}  onDeletePlant={onDeletePlant} onUpdatePlant={onUpdatePlant}/>
    </main>
  );
}

export default PlantPage;
