import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

const BeerDetails = () => {
  const { id } = useParams();
  const [beerData, setBeerData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        const data = result.data;
        console.log(data);
        setBeerData(data);
      });
  }, [id]);

  return (
    <div>
      <Header />
      {beerData && (
        <div>
          {" "}
          <img src={beerData.image_url} alt={beerData.name} width={150} />
          <div className="list">
            <div className="container" style={{ textAlign: "left" }}>
              <h1>{beerData.name}</h1>
              <h2 className="tagline">{beerData.tagline}</h2>
            </div>
            <div className="container" style={{ textAlign: "right" }}>
              <h1 className="tagline">{beerData.attenuation_level}</h1>
              <strong>
                <p>{beerData.first_brewed}</p>
              </strong>
            </div>
          </div>
          <div className="homeText">
            <p>{beerData.description}</p>
            <strong>Created by:</strong> {beerData.contributed_by}
          </div>
        </div>
      )}
    </div>
  );
};

export default BeerDetails;
