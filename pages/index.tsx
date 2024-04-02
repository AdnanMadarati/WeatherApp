import { useState } from "react";
import { Weather } from "../components/Weather";
import styles from "../components/Hero.module.css";
import { Searchbar } from "@/components/Searchbar";
import { Footer } from "@/components/Footer";
import { Error } from "@/components/Error";

interface currentType {
  condition: { text: String; icon: string };
  feelslike_c: number;
  humidity: number;
  temp_c: number;
  wind_kph: number;
  last_updated: string;
}

export interface IWeather {
  current: currentType;
  error: { message: String };
  location: { name: string };
}

interface forcastType {
  dt_txt: string;
  main: {temp: number};
  weather: [{icon: string, description: string}];
}

export interface IForcast {
  [0]: forcastType;
  [1]: forcastType;
  [2]: forcastType;
  [3]: forcastType;
}

export default function Hero() {
  //We can not give weather an initial value of {} because before the data arrives, it will be empty and thus "weather.main" wont be recognized.
  //So we say that the initial value is undefined because we arnt sure what the type will be or we excpect values that are defined in IWeather
  const [weather, setWeather] = useState<undefined | IWeather>();
  const [forcast, setForcast] = useState<undefined | IForcast>();
  const [loading, setLoading] = useState(false);

  async function getWeather(city: string) {
    setLoading(true);

    const weatherResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_FORCAST_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    );
    const weatherData = await weatherResponse.json();
    setWeather(weatherData);

    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const datePattern = new RegExp(`^${year}-\\d{2}-${day}.*$`);

    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
    const forcastData = await forcastResponse.json();
    const filteredForcastData = forcastData.list.filter(
      (item: { dt_txt: string }) =>
        !datePattern.test(item.dt_txt) && item.dt_txt.includes("12:00:00")
    );

    if(filteredForcastData.length === 5) {
      filteredForcastData.pop()
    }
    setForcast(filteredForcastData);

    setLoading(false);
    console.log(filteredForcastData[0].weather[0].description);
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

        {/* The optional chaining (?.) operator accesses an object's property or calls a function. 
         If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. */}
        {weather && forcast && (
          <Weather weatherData={weather} forcastData={forcast} handler={removeWeather} />
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
