import { Weather } from '../components/Weather';
import styles from '../components/Hero.module.css';
import { Searchbar } from '@/components/Searchbar';
import { Footer } from '@/components/Footer';
import { Error } from '@/components/Error';

import { useWeather } from '@/Hooks';

const HomePage = () => {
  const { isLoading, weather } = useWeather();

  console.log(weather, 'weather');
  console.log(isLoading, 'loading home');

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.main}>
      {!isLoading && !weather && <Searchbar />}

      {/* The optional chaining (?.) operator accesses an object's property or calls a function.
         If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. */}
      {weather && Object.keys(weather)?.length && <Weather />}

      {weather?.error && (
        <Footer>
          <Error data={weather} />
        </Footer>
      )}
    </div>
  );
};

export default HomePage;
