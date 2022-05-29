import React, { useEffect } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilmsFromApi, getFilmsFromApi } from '../../features/filmsFromApi/filmsFromApiSlice';
import { getAllFilms, getFilmsApiAndStorage } from '../../features/allFilms/allFilmsSlice';
import { getAllTitleFilmsLocalStorage, getFilmsLocalStorage, getTitleFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
//COMPONENTS
import BoxMovie from '../BoxMovie';
//MODELS
import { ItemMovieList } from '../../models/ItemMovieList';
//FILES
import { useLocalStorage } from '../../services/customHooks/useLocalStorage';

const style = bemCssModules(MovieListStyles);

const MovieList: React.FC = () => {

  const { filmsTab } = useSelector((store: any) => store.starWars);
  const [state] = useLocalStorage("MyMovies", []);
  const _filmsFromApi = useSelector(getAllFilmsFromApi);
  const _AllFilms = useSelector(getFilmsApiAndStorage)
  const _filmsTitleStorage = useSelector(getAllTitleFilmsLocalStorage)
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



  useEffect(() => {
    let AllFilmsTab: [] | any = [];
    AllFilmsTab = _filmsFromApi.concat(_filmsTitleStorage);
    dispatch(getAllFilms(AllFilmsTab));
  }, [filmsTab, state]);

  return (
    <div className={style()}>
      {
        _AllFilms.map((item: ItemMovieList) => <BoxMovie key={item.id} item={item} />)
      }
    </div>
  )
}

export default MovieList;

