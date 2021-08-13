import styles from "../styles/Brewery.module.css";
import BreweryItem from "./BreweryItem";

const BreweryList = ({ breweries }) => {
  return (
    <div className={styles.breweries}>
      {breweries.map((brewery, index) => {
        return (
          <div key={index}>
          <BreweryItem brewery={brewery}/>
          </div>
        );
      })}
    </div>
  );
};

export default BreweryList;
