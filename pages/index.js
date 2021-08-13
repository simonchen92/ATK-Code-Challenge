import BreweryList from "../components/BreweryList";
import styles from "../styles/Home.module.css";

export default function Home({ breweries }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Open Brewery DB</h1>
      <h3 className={styles.title}>Breweries in Massachusetts</h3>
      <BreweryList breweries={breweries} />
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
