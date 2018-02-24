import React from "react";
import "./SearchResults.css";


const SearchResults = props =>
  <ul className="list-group search-results">
    {props.results.map(result, i =>
      <li key={result._id} className="list-group-item">
        <a href={result.web_url}>{result.headline.main}</a>{result._id}
        <button>Save</button>
      </li>
    )}
  </ul>;
  
export default SearchResults;
