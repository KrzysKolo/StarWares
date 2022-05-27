import React, { useEffect } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { getPlanetsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { PrimaryButton } from '../buttons';

const style = bemCssModules(MovieListStyles);
export type MovieListProps = {

};


const MovieList: React.FC = () => {
  const [state] = useLocalStorage("MyMovies", []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanetsLocalStorage(state));
  }, [state]);

console.log('aaa', state)
  return (
    <div className={style()}>
      {state.map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: React.Key | null | undefined) => <p key={i}>{item.title}</p>)}
    </div>
  )
}

export default MovieList;