import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { Planet } from '../../models/Planet';

type ReturnType<T> = [
  T| Planet | undefined | any,
  React.Dispatch<React.SetStateAction<T | undefined> | any>
];

export const useLocalStorage = <T,>(key: string, initialValue?: T | any): ReturnType<T> => {
  const dispatch = useDispatch();
  const [state, setState] = useState<T | undefined >(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);

      return value ? JSON.parse(value) : dispatch(getAllFilmsLocalStorage(initialValue));
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);

  return [state, setState];
};