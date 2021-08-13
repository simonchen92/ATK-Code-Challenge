import Link from "next/link";
import styles from "../styles/Brewery.module.css";

const BreweryItem = ({ brewery }) => {
  return (
    <Link href="/detail/[id]" as={`/detail/${brewery.id}`} passHref>
      <div className={styles.brewery}>
        <h1>{brewery.name}</h1>
        <p>{brewery.street}</p>
        <p>{`${brewery.city}, ${brewery.state}`}</p>
        <p>Phone Number: {brewery.phone}</p>
      </div>
    </Link>
  );
};

export default BreweryItem;
