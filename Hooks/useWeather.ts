import { IForecast, IWeather } from '@/types';
import { parseISO } from 'date-fns';
import { useState } from 'react';

export const useWeather = () => {
  const [weather, setWeather] = useState<IWeather | undefined>();
  const [forecast, setForecast] = useState<Array<IForecast>>();
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async (city: string) => {
    try {
      setIsLoading(true);
      const weatherResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_FORCAST_KEY}&q=${city}&days=3&aqi=no&alerts=no`
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      const forcastData = await forecastRes.json();

      const filteredForcastData = forcastData?.list?.filter(
        (forecast: IForecast) =>
          parseISO(forecast?.dt_txt).getDate() !== new Date().getDate() &&
          parseISO(forecast?.dt_txt).getHours() === 12
      );

      setForecast(filteredForcastData);
    } catch (error) {
      console.error(error, 'error');
    }

    setIsLoading(false);
  };

  return {
    weather,
    forecast,
    isLoading,
    getWeather,
    setWeather,
  };
};
