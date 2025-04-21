import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import axios from "axios";

function App() {

  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlants = async () => {
      try{
        const response = await axios.get(' http://localhost:6001/plants');
        setPlants(response.data);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [])

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6001/plants/${id}`)
      setPlants(plants.filter(plant => plant.id !== id))
    } catch (err) {
      console.error('Error deleting expense:', err)
    }
  }

  const handleUpdatePlant = (updatedPlant) => {
    const updated = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updated);
  };


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}  onAddPlant={handleAddPlant} onDeletePlant={handleDelete} onUpdatePlant={handleUpdatePlant}/>
    </div>
  );
}

export default App;
