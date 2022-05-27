import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { PrimaryButton } from '../buttons';
import { getAllFilmsFromApi, getFilmsFromApi } from '../../features/filmsFromApi/filmsFromApiSlice';
import { getAllFilms, getFilmsApiAndStorage } from '../../features/allFilms/allFilmsSlice';

const style = bemCssModules(MovieListStyles);
export type MovieListProps = {
};


const MovieList: React.FC = () => {
  const [variantButton, setVariantButton] = useState<boolean>(true);
  const { filmsTab } = useSelector((store: any) => store.starWars);
  const [state] = useLocalStorage("MyMovies", []);
  const dispatch = useDispatch();

  const handleShowFormToAddFilm = (id: string | number) => {
    setVariantButton(!variantButton);
  };

  useEffect(() => {
    let tabFilm: any = []
    filmsTab.forEach((item: any) => {
      const bbb = {
        title: item.title,
        planets: item.planets,
        id: item.episode_id
      }
      tabFilm.push(bbb)
      console.log(tabFilm)

    });
    dispatch(getFilmsFromApi(tabFilm))
  }, [filmsTab]);

  const filmsFromApi = useSelector(getAllFilmsFromApi);
  const allFilms = useState(getFilmsApiAndStorage)

  useEffect(() => {
    let AllFilmsTab: [] | any = [];
    AllFilmsTab = filmsFromApi.concat(state)
    console.log(AllFilmsTab)
    dispatch(getPlanetsLocalStorage(state));
    dispatch(getAllFilms(AllFilmsTab));
  }, [filmsTab, state]);



  return (
    <div className={style()}>
      {allFilms.map((item: { title: string }, i: React.Key ) => <div key={i}>
        <PrimaryButton title={item.title} primary={variantButton} onClick={() => handleShowFormToAddFilm(`${ item.title }`)} />
      </div>)}
    </div>
  )
}

export default MovieList;