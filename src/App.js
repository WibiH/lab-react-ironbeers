import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeersList";

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      const data = result.data;
      setBeers(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="	/beers" element={<BeersList beers={beers} />} />
          <Route path="	/:id" />
          <Route path="	/random-beer" />
          <Route path="	/new-beer" />
          <Route path="	/search?q={query}" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
