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
export type MovieListProps = {
};

const MovieList: React.FC = () => {
  const [variantButton, setVariantButton] = useState<boolean>(true);
  const { filmsTab } = useSelector((store: any) => store.starWars);
  const [state] = useLocalStorage("MyMovies", []);
  const dispatch = useDispatch();

  const handleShowTabAbouteMovie = (e: string | number) => {
    console.log('to jest', e)
    setVariantButton(!variantButton);
  };

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
    AllFilmsTab = filmsFromApi.concat(filmsTitleStorage)
    console.log(AllFilmsTab)
    dispatch(getAllFilms(AllFilmsTab));
  }, [filmsTab, state]);

  return (
    <div className={style()}>
      { AllFilms.map((item: { title: string, id: number }) => <BoxMovie key={item.id} item={item} />)}
    </div>
  )
}

export default MovieList;

