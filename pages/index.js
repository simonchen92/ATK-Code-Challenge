import React, { useState } from "react";
import BreweryList from "../components/BreweryList";
import FilterButton from "../components/FilterButton";
import styles from "../styles/Home.module.css";

export default function Home({ breweries }) {
  // Get all Brewery Types for Button Filter
  const allCategories = [
    "All",
    ...new Set(breweries.map((item) => item.brewery_type)),
  ];

  // useState to store data
  const [brewery, setBrewery] = useState(breweries);
  const [buttons, setButtons] = useState(allCategories);

  // Create Filter function for buttons
  const filter = (button) => {
    // When clicking on button All return original set of breweries
    if (button === "All") {
      setBrewery(breweries);
      return;
    }

    // Display the filteredData based off button clicked for brewery type
    const filteredData = breweries.filter(
      (item) => item.brewery_type === button
    );

    setBrewery(filteredData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Open Brewery DB</h1>
      <h3 className={styles.title}>Breweries in Massachusetts</h3>
      <p className={styles.description}>Filter Breweries by Brewery Type</p>
      <FilterButton buttons={buttons} filter={filter} />
      <BreweryList breweries={brewery} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.openbrewerydb.org/breweries?by_state=massachusetts"
  );

  const breweries = await res.json();

  return {
    props: {
      breweries,
    },
  };
};
