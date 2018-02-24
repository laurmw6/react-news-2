import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.articles array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="article">Topic:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="article"
        list="articles"
        type="text"
        className="form-control"
        placeholder="Type in an article topic to begin"
        id="article"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;
