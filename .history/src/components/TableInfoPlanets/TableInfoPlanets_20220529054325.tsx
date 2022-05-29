import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
import { HeaderTable } from '../tableComponents';
import BodyTable from '../tableComponents/BodyTable';
import { useSelector } from 'react-redux';
import { getAllFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { getAllFilmsFromApi } from '../../features/filmsFromApi/filmsFromApiSlice';
import { getAllPlanetsApi } from '../../features/planets/planetsSlice';


const style = bemCssModules(TableInfoPlanetsStyles);

export type TableInfoPlanetsProps = {
  text: string;
  item: any;
  isLoading: boolean;
  setIsLoading: React.MouseEventHandler<HTMLElement> | any;
}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text, item, isLoading, setIsLoading }) => {
  const { id } = item;
  const _filmFromLocalStorage = useSelector(getAllFilmsLocalStorage);
  const _filmFromApi = useSelector(getAllFilmsFromApi);
  const { filmsTab } = useSelector((store: any) => store.starWars);
  const _planets = useSelector(getAllPlanetsApi);
  const [infoFilm, setInfoFilm] = useState([]);
  const [isErr, setIsErr] = useState('');

  const filmFromLocalStorage = () => {
    let timer = setTimeout(() => {
      try {
        let film = _filmFromLocalStorage.filter((item: any) => item.title === text);
        setInfoFilm(film);
        setIsLoading(false);
        clearTimeout(timer);
      }
      catch {
        setIsErr('is problem');
      }
    }, 500)
  };
  const filmFromAPI = () => {
    try {
      let film = filmsTab.filter((item: any) => item.title === text);
      const TabFilm = []
      let film2 = film.map(item => {
        let ApiMovie = {
          title: item.title,
          planets: item.planets,
          id: item.episode_id ,
        }
        TabFilm.push(ApiMovie);
      })
      console.log(film);
      console.log(film2)
      console.log("filmAPI")
    }
    catch {
      setIsErr("is problem")
    }

  };

  useEffect(() => {
    if (id > 10) {
      filmFromLocalStorage();
    }
    else {
      filmFromAPI();
    }
  }, [id]);

  return (
    <section className={style()}>
      <HeaderTable isLoading={isLoading} />
      { isLoading
        ? (<div> Loading ...</div>)
        : (<BodyTable film={infoFilm} />)
      }
  </section>
  )
}

export default TableInfoPlanets