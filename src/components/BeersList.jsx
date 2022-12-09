import { Link } from "react-router-dom";
import Header from "./Header";

const BeersList = (props) => {
  const { beers } = props;
  console.log(beers);
  return (
    <div>
      <Header />
      {beers.map((beer) => {
        return (
          <Link
            key={beer._id}
            to={`/beers/${beer._id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="list">
              <div className="container">
                <img src={beer.image_url} alt={beer.name} width={80} />
              </div>
              <div className="container">
                <h1>{beer.name}</h1>
                <h2 className="tagline">{beer.tagline}</h2>
                <strong>Created by:</strong> {beer.contributed_by}
              </div>
            </div>
            <hr />
          </Link>
        );
      })}
    </div>
  );
};

export default BeersList;
