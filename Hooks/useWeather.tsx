import { IForcast, IWeather } from "@/types";
import axios from "axios";
import { useState } from "react";
import { getCity } from "@/components/Searchbar";

export const getWeather = () => {
  //We can not give weather an initial value of {} because before the data arrives, it will be empty and thus "weather.main" wont be recognized.
  //So we say that the initial value is undefined because we arnt sure what the type will be or we excpect values that are defined in IWeather
  const [weather, setWeather] = useState<IWeather | undefined>();
  const [forcast, setForcast] = useState<Array<IForcast>>();

  const city = getCity();
  
  const weatherData = axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_FORCAST_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    )
    .then((res) => setWeather(res.data));

  console.log(weather, "weather");

  const forcastData = axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    )
    .then((res) => setForcast(res.data));

  console.log(forcast, "forcast");

  // const year = new Date().getFullYear();
  // const day = new Date().getDate();
  // const datePattern = new RegExp(`^${year}-\\d{2}-${day}.*$`);

  // if (forcastData.list) {
  //   const filteredForcastData = forcastData.list.filter(
  //     (item: { dt_txt: string }) =>
  //       !datePattern.test(item.dt_txt) && item.dt_txt.includes("12:00:00")
  //   );

  //   if (filteredForcastData.length === 5) {
  //     filteredForcastData.pop();
  //   }
  // setForcast(filteredForcastData);
  // console.log(forcast, "Forcast!");

  return {
    city,
    weather,
    forcast,
    setForcast,
    setWeather,
  };
};
