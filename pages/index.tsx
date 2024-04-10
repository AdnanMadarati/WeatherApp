import { useState } from "react";
import { Weather } from "../components/Weather";
import styles from "../components/Hero.module.css";
import { Searchbar } from "@/components/Searchbar";
import { Footer } from "@/components/Footer";
import { Error } from "@/components/Error";
import { IWeather, IForecast } from "@/types";
import { fetchWeather, fetchForecast } from "../utility/api";

export default function Homepage() {
  const [weather, setWeather] = useState<undefined | IWeather>();
  const [forecast, setforecast] = useState<undefined | Array<IForecast>>();
  const [loading, setLoading] = useState(false);

  async function getWeather(city: string) {
    setLoading(true);

    const weatherData = await fetchWeather(city);
    setWeather(weatherData);

    const forecastData = await fetchForecast(city);
    setforecast(forecastData);

    setLoading(false);
  }

  function removeWeather() {
    setWeather(undefined);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.main}>
        {!weather?.current && <Searchbar handler={getWeather} />}
        {weather && forecast && (
          <Weather weather={weather} forecasts={forecast} handler={removeWeather} />
        )}
      </div>
      {weather?.error && (
        <Footer>
          <Error data={weather} />
        </Footer>
      )}
    </>
  );
}
