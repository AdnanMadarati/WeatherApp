import { IForecast } from '@/types';
import { parseISO } from 'date-fns';

export async function fetchWeather(city: string) {
  const weatherResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_FORECAST_KEY}&q=${city}&days=3&aqi=no&alerts=no`
  );
  return await weatherResponse.json();
}

export async function fetchForecast(city: string) {
    const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      const forecastData = await forecastRes.json();

      const filteredforecastData = forecastData?.list?.filter(
        (forecast: IForecast) =>
          parseISO(forecast?.dt_txt).getDate() !== new Date().getDate() &&
          parseISO(forecast?.dt_txt).getHours() === 12
      );

  return filteredforecastData;
}
