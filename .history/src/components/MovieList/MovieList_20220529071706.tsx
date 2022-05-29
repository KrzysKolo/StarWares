import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilmsFromApi, getFilmsFromApi } from '../../features/filmsFromApi/filmsFromApiSlice';
import { getAllFilms, getFilmsApiAndStorage } from '../../features/allFilms/allFilmsSlice';
import { getAllTitleFilmsLocalStorage, getFilmsLocalStorage, getTitleFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import BoxMovie from '../BoxMovie';

const style = bemCssModules(MovieListStyles);
export type ItemMovieList = {
  title: string,
  id: number,
};

const MovieList: React.FC = () => {
  const { filmsTab } = useSelector((store: any) => store.starWars);
  const [state] = useLocalStorage("MyMovies", []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmsLocalStorage(state));
    let tabFilmStorage: any = []
    state.forEach((item: any) => {
      const films = {
        title: item.title,
        id: item.id,
      }
      tabFilmStorage.push(films)
    });
    dispatch(getTitleFilmsLocalStorage(tabFilmStorage));
  }, [state]);

  useEffect(() => {
    let tabFilm: any = []
    filmsTab.forEach((item: any) => {
      const films = {
        title: item.title,
        id: item.episode_id
      }
      tabFilm.push(films)
    });
    dispatch(getFilmsFromApi(tabFilm))
  }, [filmsTab]);

  const filmsFromApi = useSelector(getAllFilmsFromApi);
  const AllFilms = useSelector(getFilmsApiAndStorage)
  const filmsTitleStorage = useSelector(getAllTitleFilmsLocalStorage)

  useEffect(() => {
    let AllFilmsTab: [] | any = [];
    AllFilmsTab = filmsFromApi.concat(filmsTitleStorage);
    dispatch(getAllFilms(AllFilmsTab));
  }, [filmsTab, state]);

  return (
    <div className={style()}>
      {
        AllFilms.map((item: ItemMovieList) => <BoxMovie key={item.id} item={item} />)
      }
    </div>
  )
}

export default MovieList;

