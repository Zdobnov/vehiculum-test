import { useEffect, useState } from "react";

import { getSearchResults } from "../../utils/api";
import SearchResultsItem from "../../components/SearchResultsItem/SearchResultsItem";

import Wrapper from "../../components/Wrapper/Wrapper";

import "./SearchResults.scss";

import Spinner from '../../images/spinner.svg';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    getSearchResults()
      .then(data => setSearchResults(data));
  }, []);

  return (
    <Wrapper className="search-results">
      <div className="search-results__list">
        {searchResults.length ? (
          searchResults.map(item => (
            <SearchResultsItem
              item={item}
              key={item.id}
            />
          ))
        ) : (
          <img src={Spinner} alt="spinner"/>
        )}
      </div>
    </Wrapper>
  );
};

export default SearchResults;
