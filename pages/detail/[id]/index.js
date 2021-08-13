import Link from "next/link";
import styles from "../../../styles/Brewery.module.css";

const BreweryInfo = ({ brewery }) => {
  return (
    <div className={styles.breweryInfo}>
      <h1>{brewery.name}</h1>
      <p>{brewery.street}</p>
      <p>{`${brewery.city}, ${brewery.state}`}</p>
      <p>Phone Number: {brewery.phone}</p>
      <a href={brewery.website_url} target="_blank" rel="noreferrer">
        {brewery.website_url}
      </a>
      <div className={styles.breweryInfoLinks}>
        <Link href="/">Go Back Home</Link>
        <Link href="/search">Search</Link>
      </div>
    </div>
  );
};

// Fetch pre-rendered data at request time (on click each brewery)
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.openbrewerydb.org/breweries/${context.params.id}`
  );

  const brewery = await res.json();

  if (!brewery) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      brewery,
    },
  };
};

export default BreweryInfo;
