import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Breweries } from "./components/Breweries";
import { BreweryDetails } from "./components/BreweryDetails";

import "./App.scss";

function App() {
  const [breweries, setBreweries] = useState(null);

  useEffect(() => {
    const apiUrl =
      "https://api.openbrewerydb.org/breweries?by_city=milwaukee&per_page=30";
    const fetchBreweries = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);
        setBreweries(json);
      } catch (err) {
        console.log("There was an error", err);
      }
    };

    fetchBreweries();
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Breweries breweries={breweries} />} />
          <Route path="/brewerydetails/:name" element={<BreweryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
