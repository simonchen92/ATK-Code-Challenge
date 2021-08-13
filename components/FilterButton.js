import styles from "../styles/Button.module.css";

const FilterButton = ({ buttons, filter }) => {
  const handleClick = (event) => {
    filter(event);
  };

  return (
    <div className={styles.bttnContainer}>
      {buttons.map((category, index) => {
        return (
          <div className={styles.bttnCategory} key={index}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FilterButton;
