import { IForcast, IWeather } from "@/pages";
import React from "react";
import styles from "../components/Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  weatherData: IWeather;
  forcastData: IForcast;
  handler: Function;
}

export const Weather = ({ weatherData, forcastData, handler }: Props) => {
  function handleRemoveWeather() {
    handler();
  }

  console.log(Object.keys(forcastData).map(item => +item));

  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.cardTop}>
          <div className={styles.weatherState}>
            <div className={styles.leftInfo}>
              <h3>{weatherData.location.name}</h3>
              <h4>{weatherData.current.last_updated}</h4>
              <div className={styles.imgBackground}>
                <img
                  src={weatherData.current.condition.icon}
                  alt="Weather-icon"
                  width={100}
                  height={100}
                />
              </div>
              <h4>{weatherData.current.condition.text}</h4>
            </div>
            <div className={styles.rightInfo}>
              <p>{weatherData.current.temp_c}°C</p>
              <p>Feels Like {weatherData.current.feelslike_c}°C</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.cardButtom}>
         <div className={styles.forcast}>
            <div className={styles.forcastCard}>
              <img src={`https://openweathermap.org/img/wn/${forcastData[0].weather[0].icon}@2x.png`} alt={forcastData[0].weather[0].description}/>
              <p>{forcastData[0].main.temp}°C</p>
            </div>
            <p>
              {
                new Date(forcastData[0].dt_txt.split(" ")[0])
                  .toString()
                  .split(" ")[0]
              }
            </p>
          </div>
          <div className={styles.forcast}>
            <div className={styles.forcastCard}>
              <img src={`https://openweathermap.org/img/wn/${forcastData[1].weather[0].icon}@2x.png`} alt={forcastData[1].weather[0].description}/>
              <p>{forcastData[1].main.temp}°C</p>
            </div>
            <p>
              {
                new Date(forcastData[1].dt_txt.split(" ")[0])
                  .toString()
                  .split(" ")[0]
              }
            </p>
          </div>
          <div className={styles.forcast}>
            <div className={styles.forcastCard}>
              <img src={`https://openweathermap.org/img/wn/${forcastData[2].weather[0].icon}@2x.png`} alt={forcastData[2].weather[0].description}/>
              <p>{forcastData[2].main.temp}°C</p>
            </div>
            <p>
              {
                new Date(forcastData[2].dt_txt.split(" ")[0])
                  .toString()
                  .split(" ")[0]
              }
            </p>
          </div>
          <div className={styles.forcast}>
            <div className={styles.forcastCard}>
              <img src={`https://openweathermap.org/img/wn/${forcastData[3].weather[0].icon}@2x.png`} alt={forcastData[3].weather[0].description}/>
              <p>{forcastData[3].main.temp}°C</p>
            </div>
            <p>
              {
                new Date(forcastData[3].dt_txt.split(" ")[0])
                  .toString()
                  .split(" ")[0]
              }
            </p>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={handleRemoveWeather}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <p>Back</p>
      </button>
    </>
  );
};
