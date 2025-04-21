import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import axios from "axios";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
