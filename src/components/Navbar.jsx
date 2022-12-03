import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <br />
      <Link to="/beers" style={{ textDecoration: "none" }}>
        <img src={"./assets/beers.png"} alt={"beers"} />
        <h1>All Beers</h1>
        <p>A List Beers page where you should display all the beers</p>
      </Link>
      <Link to="/random" style={{ textDecoration: "none" }}>
        <img src={"/src/assets/random-beer.png"} alt={"random-beer"} />
        <h1>Random Beer</h1>
        <p>A Random Beer page to display a Random Beer</p>
      </Link>
      <Link to="/new" style={{ textDecoration: "none" }}>
        <img src={"/src/assets/new-beer.png"} alt={"new-beer"} />
        <h1> New Beer</h1>
        <p>A New Beer page to show a form where a user can create new beers</p>
      </Link>
    </nav>
  );
};

export default Navbar;
