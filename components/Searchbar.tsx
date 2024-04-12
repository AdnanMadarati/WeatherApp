import { useState } from "react";
import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  getWeather: Function;
}

export const Searchbar = ({getWeather} : Props) => {
  const [city, setCity] = useState("");

  function getWeatherHandler() {
    getWeather(city)
  }

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input}
        type="text"
        placeholder="Your City..."
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        onKeyDown={(e) => e.key === 'Enter' && getWeatherHandler()}
      />
      <button onClick={getWeatherHandler} className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      </button>
    
    </div>
  );
};
