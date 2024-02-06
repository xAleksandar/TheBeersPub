import React, { useEffect } from "react";
import "./App.css";
import { getAllBeers } from "./lib/api/requests";
import { Headbar, BeerTable } from "./components";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const results = await getAllBeers();
      console.log(results);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Headbar />
      <BeerTable />
    </div>
  );
}

export default App;
