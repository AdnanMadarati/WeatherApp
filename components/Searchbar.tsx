import { useState } from "react";
import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getWeather } from "@/Hooks";

let cityToPass: string;

export const Searchbar = () => {
  const [city, setCity] = useState("");

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      getWeather();
    }
  }

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input}
        type="text"
        placeholder="Your City..."
        value={city}
        onChange={(e) => {
          setCity(e.currentTarget.value);
          cityToPass = e.currentTarget.value;
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={getWeather} className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      </button>
    </div>
  );
};

export function getCity() {
  return cityToPass;
}
