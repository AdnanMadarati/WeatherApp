import { IForcast } from "@/pages";
import React from "react";
import styles from "../components/Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  weatherData: IForcast;
  handler: Function;
}

export const Weather = ({ weatherData, handler }: Props) => {
  function handleRemoveWeather() {
    handler();
  }

  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.cardTop}>
          <div className={styles.weatherState}>
            <div className={styles.leftInfo}>
              <h3>{weatherData.location.name}</h3>
              <h4>{weatherData.current.last_updated}</h4>
              <img
                src={weatherData.current.condition.icon}
                alt="Weather-icon"
                width={100}
                height={100}
              />
              <h4>{weatherData.current.condition.text}</h4>
            </div>
            <div>
              <p>{weatherData.current.temp_c}°C</p>
              <p>Feels Like {weatherData.current.feelslike_c}°C</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <button className={styles.button} onClick={handleRemoveWeather}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </button>
    </>
  );
};
