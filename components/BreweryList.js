import styles from "../styles/Brewery.module.css";

const BreweryList = ({ breweries }) => {
  return (
    <div className={styles.breweries}>
      {breweries.map((brewery, index) => {
        return (
          <div className={styles.brewery} key={index}>
            <h1>{brewery.name}</h1>
            <p>{brewery.street}</p>
            <p>{`${brewery.city}, ${brewery.state}`}</p>
            <p>Phone Number: {brewery.phone}</p>
            <a href={brewery.website_url} target="_blank" rel="noreferrer">
              {brewery.website_url}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BreweryList;
