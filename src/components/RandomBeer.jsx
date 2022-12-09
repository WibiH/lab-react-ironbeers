import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

const RandomBeer = () => {
  const { random } = useParams();
  const [beerData, setBeerData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((result) => {
        const data = result.data;
        console.log(data);
        setBeerData(data);
      });
  }, [random]);

  return (
    <div>
      <Header />
      {beerData && (
        <div>
          <img src={beerData.image_url} alt={beerData.name} width={150} />
          <h1>{beerData.name}</h1>
          <h2>{beerData.tagline}</h2>
          <p>{beerData.attenuation_level}</p>
          <strong>
            <p>{beerData.first_brewed}</p>
          </strong>
          <p>{beerData.description}</p>
          <strong>Created by:</strong> {beerData.contributed_by}
        </div>
      )}
    </div>
  );
};

export default RandomBeer;
