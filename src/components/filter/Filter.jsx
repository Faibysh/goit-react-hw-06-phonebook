import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { useEffect, useState } from 'react';
import { setFilter } from 'store/filterSlice/filterSlice';

function Filter() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(value));
  }, [value]);

  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name:
      </label>
      <input
        className={styles.input}
        type="text"
        id="filter"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default Filter;
