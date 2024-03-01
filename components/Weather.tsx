import type { Dispatch, SetStateAction } from 'react';
import styles from '../components/Weather.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { format, parseISO } from 'date-fns';
import { useWeather } from '@/Hooks';

export const Weather = () => {
  const { forecast, weather, setWeather } = useWeather();

  if (!weather) return null;

  return (
    <>
      <div className={styles.mainCard}>
        <div className={styles.cardTop}>
          <div className={styles.weatherState}>
            <div className={styles.leftInfo}>
              <h3>{weather.location.name}</h3>
              <h4>{weather.current.last_updated}</h4>
              <div className={styles.imgBackground}>
                <img
                  src={weather.current.condition.icon}
                  alt='Weather-icon'
                  width={100}
                  height={100}
                />
              </div>
              <h4>{weather.current.condition.text}</h4>
            </div>
            <div className={styles.rightInfo}>
              <p>{weather.current.temp_c}°C</p>
              <p>Feels Like {weather.current.feelslike_c}°C</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.cardButtom}>
          {Array.isArray(forecast)
            ? forecast?.map((forecast, index) => (
                <div className={styles.forcast} key={`forecast-${index}`}>
                  <div className={styles.forcastCard}>
                    <img
                      src={`https://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@2x.png`}
                      alt={forecast?.weather[index]?.description}
                    />
                    <p>{forecast?.main?.temp}°C</p>
                  </div>
                  <p>{format(parseISO(forecast?.dt_txt), 'iii')}</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <button className={styles.button} onClick={() => setWeather(undefined)}>
        <FontAwesomeIcon icon={faAngleLeft} size='2x' />
        <p>Back</p>
      </button>
    </>
  );
};
