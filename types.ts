export interface ICurrentDay {
  condition: { text: String; icon: string };
  feelslike_c: number;
  humidity: number;
  temp_c: number;
  wind_kph: number;
  last_updated: string;
}

export interface IWeather {
  current: ICurrentDay;
  error: { message: string };
  location: { name: string };
}

export interface IForecast {
  dt_txt: string;
  main: { temp: number };
  weather: Array<{ icon: string; description: string }>;
}
