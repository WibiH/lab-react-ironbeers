import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

const NewBeerForm = ({ onBeerSubmit }) => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const handlePostTrigger = (beer) => {
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((result) => {
        console.log(result.data);
      });
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleTaglineChange = (event) => {
    const { value } = event.target;
    setTagline(value);
  };

  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };

  const handleFirstBrewedChange = (event) => {
    const { value } = event.target;
    setFirstBrewed(value);
  };

  const handleBrewersTipsChange = (event) => {
    const { value } = event.target;
    setBrewersTips(value);
  };

  const handleAttenuationLevelChange = (event) => {
    const { valueAsNumber } = event.target;
    setAttenuationLevel(valueAsNumber);
  };

  const handleContributedByChange = (event) => {
    const { value } = event.target;
    setContributedBy(value);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const body = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    handlePostTrigger(body);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleFormSubmission} className="form">
        <label htmlFor="input-name">Beer Name</label>
        <input
          id="input-name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="input-tagline">Tagline</label>
        <input
          id="input-tagline"
          type="text"
          value={tagline}
          onChange={handleTaglineChange}
        />
        <label htmlFor="input-description">Description</label>
        <textarea
          id="input-description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <label htmlFor="input-firstBrewed">First Brewed</label>
        <input
          id="input-firstBrewed"
          type="text"
          value={firstBrewed}
          onChange={handleFirstBrewedChange}
        />
        <label htmlFor="input-brewersTips">Brewers' Tips</label>
        <input
          id="input-brewersTips"
          type="text"
          value={brewersTips}
          onChange={handleBrewersTipsChange}
        />
        <label htmlFor="input-attenuationLevel">Attenuation Level</label>
        <input
          id="input-attenuationLevel"
          type="number"
          value={attenuationLevel}
          onChange={handleAttenuationLevelChange}
        />
        <label htmlFor="input-contributedBy">Contributed By</label>
        <input
          id="input-contributedBy"
          type="number"
          value={contributedBy}
          onChange={handleContributedByChange}
        />
        <button>ADD NEW</button>
      </form>
    </div>
  );
};

export default NewBeerForm;
