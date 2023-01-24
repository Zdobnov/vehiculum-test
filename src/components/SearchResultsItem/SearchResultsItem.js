import { Link } from "react-router-dom";

import {
  currencyFormatter,
  vehicleMakeModelFormatter,
} from "../../utils/vehicleHandler";

import "./SearchResultsItem.scss";

const SearchResultsItem = ({ item }) => {
  const { make, model } = vehicleMakeModelFormatter(item.model);

  return (
    <Link to={`/${item.id}`} className="search-result">
      <div className="search-result__image-wrapper">
        <img
          className="search-result__image"
          src={`https://vehiculum-coding-challenge.herokuapp.com/images/${item.id}/s/front.png`}
          alt={item.model}
        />
      </div>
      <div className="search-result__description">
        <h4 className="search-result__make">
          {make}
        </h4>
        <h3 className="search-result__model">
          {model}
        </h3>
        <p className="search-result__rate-text">
          Monthly Rate
        </p>
        <p className="search-result__rate-value">
          {currencyFormatter(item.grossMonthlyRate)}
        </p>
      </div>
    </Link>
  );
};

export default SearchResultsItem;
