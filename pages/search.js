import React, { useState } from "react";
import breweryStyles from "../styles/Brewery.module.css";
import searchStyles from "../styles/Search.module.css";

const Search = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchValue, setSeachValue] = useState("");

  // create fetch function to get breweries based off search value
  const getBreweries = async () => {
    const res = await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${searchValue}`
    );

    const result = await res.json();

    setBreweries(result);
  };

  const handleChange = (event) => {
    setSeachValue(event.target.value);
  };

  // Display Breweries based off Search Value
  const breweriesArr = breweries.map((brewery, index) => {
    return (
      <div className={breweryStyles.brewery} key={index}>
        <h1>{brewery.name}</h1>
        <p>{brewery.street}</p>
        <p>{`${brewery.city}, ${brewery.state}`}</p>
        <p>Phone Number: {brewery.phone}</p>
        <a href={brewery.website_url} target="_blank" rel="noreferrer">
          {brewery.website_url}
        </a>
      </div>
    );
  });

  return (
    <div className={searchStyles.searchPageContainer}>
      <h1 className={searchStyles.title}>Search for your favorite Breweries</h1>
      <div className={searchStyles.searchBarContainer}>
        <input
          className={searchStyles.searchInput}
          type="text"
          placeholder="Search Breweries..."
          value={searchValue}
          onChange={(input) => handleChange(input)}
        />
        <button type="button" onClick={getBreweries}>
          Search
        </button>
      </div>
      <div className={breweryStyles.breweries}>{breweriesArr}</div>
    </div>
  );
};

export default Search;
