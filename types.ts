export interface currentType {
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
  
  export interface IForecast {
    dt_txt: string;
    main: {temp: number};
    weather: [{icon: string, description: string}];
  }