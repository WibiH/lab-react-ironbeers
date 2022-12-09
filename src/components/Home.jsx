import { Link } from "react-router-dom";
import beersPic from "../assets/beers.png";
import randomBeerPic from "../assets/random-beer.png";
import newBeerPic from "../assets/new-beer.png";

const Home = () => {
  return (
    <nav className="navbar">
      <br />
      <Link to="/beers" style={{ color: "black", textDecoration: "none" }}>
        <img src={beersPic} alt={"beers"} />
        <div className="homeText">
          <h1>All Beers</h1>
          <p>A List Beers page where you should display all the beers</p>
        </div>
      </Link>

      <Link
        to="/random-beer"
        style={{ color: "black", textDecoration: "none" }}
      >
        <img src={randomBeerPic} alt={"random-beer"} />
        <div className="homeText">
          <h1>Random Beer</h1>
          <p>A Random Beer page to display a Random Beer</p>
        </div>
      </Link>

      <Link to="/new-beer" style={{ color: "black", textDecoration: "none" }}>
        <img src={newBeerPic} alt={"new-beer"} />
        <div className="homeText">
          <h1> New Beer</h1>
          <p>
            A New Beer page to show a form where a user can create new beers
          </p>
        </div>
      </Link>
    </nav>
  );
};

export default Home;
