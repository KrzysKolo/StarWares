import { useState, useEffect } from 'react';
import { Planet } from '../../models/Planet';

type ReturnType<T> = [
  T| Planet | undefined | any,
  React.Dispatch<React.SetStateAction<T | undefined> | any>
];

export const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {

  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      console.log("dodałam nowy film")
      return value ? JSON.parse(value) : initialValue;
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