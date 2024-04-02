import React from "react";
import styles from "../components/Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useWeather } from "@/Hooks";
import { format, parseISO } from 'date-fns';


export const Weather = () => {
  const { forcast, weather, setWeather, setForcast } = useWeather(); 

  function handleRemoveWeather() {
    setWeather(undefined);
    setForcast(undefined);
  }

  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.cardTop}>
          <div className={styles.weatherState}>
            <div className={styles.leftInfo}>
              <h3>{weather?.location.name}</h3>
              <h4>{weather?.current.last_updated}</h4>
              <div className={styles.imgBackground}>
                <img
                  src={weather?.current.condition.icon}
                  alt="Weather-icon"
                  width={100}
                  height={100}
                />
              </div>
              <h4>{weather?.current.condition.text}</h4>
            </div>
            <div className={styles.rightInfo}>
              <p>{weather?.current.temp_c}°C</p>
              <p>Feels Like {weather?.current.feelslike_c}°C</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.cardButtom}>
         {Array.isArray(forcast)
            ? forcast?.map((forcast, index) => (
                <div className={styles.forcast} key={`forecast-${index}`}>
                  <div className={styles.forcastCard}>
                    <img
                      src={`https://openweathermap.org/img/wn/${forcast?.weather[0]?.icon}@2x.png`}
                      alt={forcast?.weather[index]?.description}
                    />
                    <p>{forcast?.main?.temp}°C</p>
                  </div>
                  <p>{format(parseISO(forcast?.dt_txt), 'iii')}</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <button className={styles.button} onClick={handleRemoveWeather}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <p>Back</p>
      </button>
    </>
  );
};
