import { useState } from "react";
import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  handler: Function;
}

export const Searchbar = ({ handler }: Props) => {
  const [city, setCity] = useState("");

  function getWeatherHandler() {
    handler(city);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      getWeatherHandler();
    }
  }

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input}
        type="text"
        placeholder="Your City..."
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        onKeyDown={handleKeyDown} // Changed to onKeyDown
      />
      <button onClick={getWeatherHandler} className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      </button>
    </div>
  );
};
