import React, { useEffect } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as MovieListStyles } from './MovieList.module.scss';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilmsFromApi, getFilmsFromApi } from '../../features/filmsFromApi/filmsFromApiSlice';
import { getAllFilms, getFilmsApiAndStorage } from '../../features/allFilms/allFilmsSlice';
import { getAllFilmsLocalStorage, getAllTitleFilmsLocalStorage, getTitleFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
//COMPONENTS
import { BoxMovie, Loading } from '../../components';
import { ErrorMessageTable } from '../tableComponents';
//MODELS
import { ItemMovieList } from '../../models/ItemMovieList';

const style = bemCssModules(MovieListStyles);

const MovieList: React.FC = () => {

  const { filmsTab } = useSelector((store: any) => store.starWars);
  const _filmsFromLocalStorage = useSelector(getAllFilmsLocalStorage);
  const _filmsFromApi = useSelector(getAllFilmsFromApi);
  const _AllFilms = useSelector(getFilmsApiAndStorage)
  const _filmsTitleStorage = useSelector(getAllTitleFilmsLocalStorage)
  const { isLoading } = useSelector((store: any) => store.starWars);
  const { isError } = useSelector((store: any) => store.starWars);
  const dispatch = useDispatch();

  useEffect(() => {
    let tabFilmStorage: any = []
    _filmsFromLocalStorage.forEach((item: any) => {
      const films = {
        title: item.title,
        id: item.id,
      }
      tabFilmStorage.push(films)
    });
    dispatch(getTitleFilmsLocalStorage(tabFilmStorage));
  }, [_filmsFromLocalStorage]);

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
  }, [dispatch, filmsTab]);

  useEffect(() => {
    let AllFilmsTab: [] | any = [];
    if (_filmsFromApi.length === 0) {
      dispatch(getAllFilms(AllFilmsTab));
    }
    else {
      AllFilmsTab = _filmsFromApi.concat(_filmsTitleStorage);
      dispatch(getAllFilms(AllFilmsTab));
    }
   }, [_filmsFromApi, _filmsTitleStorage, dispatch, filmsTab, _filmsFromLocalStorage]);

  return (
    <div className={style()}>
      { isError && (<div className={style('ErrorDiv')}><ErrorMessageTable message={"Error getting data from API!"} /></div>)}
      { isLoading
        ? (<Loading />)
        : (<div>
          {
            _AllFilms.map((item: ItemMovieList) => <BoxMovie key={item.id} item={item} />)
          }
        </div>)
      }


    </div>
  )
}

export default MovieList;


