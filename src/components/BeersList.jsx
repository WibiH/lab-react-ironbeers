import { Link } from "react-router-dom";

const BeersList = (props) => {
  const { beers } = props;
  return (
    <div>
      {beers.map((beer) => {
        return (
          <Link key={beer._id} to={`/${beer._id}`}>
            {beer.name}
          </Link>
        );
      })}
    </div>
  );
};

export default BeersList;
