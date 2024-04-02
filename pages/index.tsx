import { Weather } from "../components/Weather";
import styles from "../components/Hero.module.css";
import { Searchbar } from "@/components/Searchbar";
import { Footer } from "@/components/Footer";
import { Error } from "@/components/Error";
import { getWeather } from "@/Hooks/useWeather";

export default function HomePage() {
  const { weather, forcast } = getWeather();

  const isLoading = false;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.main}>
      {!isLoading && <Searchbar />}

      {/* The optional chaining (?.) operator accesses an object's property or calls a function.
       If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. */}
      {/* {!isLoading && weather?.current && forcast && <Weather />}

      {weather?.error && (
        <Footer>
          <Error data={weather} />
        </Footer>
      )} */}
    </div>
  );
}
