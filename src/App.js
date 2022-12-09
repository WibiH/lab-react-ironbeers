import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BeersList from "./components/BeersList";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";
import NewBeerForm from "./components/NewBeerForm";

import axios from "axios";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((result) => {
      const data = result.data;
      console.log(data);
      setBeers(data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<BeersList beers={beers} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeerForm />} />{" "}
          <Route path="/beers/:id" element={<BeerDetails />} />
          <Route path="/search?q={query}" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
