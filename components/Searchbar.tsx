import { useState } from 'react';
import styles from './Searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useWeather } from '@/Hooks';

export const Searchbar = () => {
  const { getWeather } = useWeather();
  const [city, setCity] = useState('');

  function handleKeyDown() {
    getWeather(city);
  }

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input}
        type='text'
        placeholder='Your City...'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && getWeather(city)}
      />
      <button onClick={handleKeyDown} className={styles.button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
      </button>
    </div>
  );
};
