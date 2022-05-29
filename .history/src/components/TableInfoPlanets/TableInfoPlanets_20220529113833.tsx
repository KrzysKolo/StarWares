import React, { useEffect, useState } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
//API
//REDUX
//COMPONENTS
import { HeaderTable, BodyTable } from '../tableComponents';
import { Loading } from '../../components'
//MODELS
//FILES
import { useSelector } from 'react-redux';
import { getAllFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
import { getAllPlanetsApi } from '../../features/planets/planetsSlice';
import { TableInfoPlanetsProps } from '../../models/TableInfoPlanetsProps';

const style = bemCssModules(TableInfoPlanetsStyles);

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text, item, isLoading, setIsLoading }) => {
  const { id } = item;
  const _filmFromLocalStorage = useSelector(getAllFilmsLocalStorage);
/*   const _filmFromApi = useSelector(getAllFilmsFromApi); */
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
    let timer = setTimeout(() => {
      try {
        let film = filmsTab.filter((item: any) => item.title === text);
        let Planets: { name: string; diameter: string; rotation_period: string; orbital_period: string; population: string; climate: string; surface_water: string; }[] = [];
        film[0].planets.forEach((element: any) => {
          // eslint-disable-next-line array-callback-return
          _planets.filter(item => item.url === element).map(item => {
            const planet = {
              name: item.name,
              diameter: item.diameter,
              rotation_period: item.rotation_period,
              orbital_period: item.orbital_period,
              population: item.population,
              climate: item.climate,
              surface_water: item.surface_water,
            };
            Planets.push(planet);
          })
        });
        let TabFilm: any = [];
        let ApiFilm = {
          title: film[0].title,
          planets: Planets,
          id: film[0].episode_id,
        }
        TabFilm.push(ApiFilm);
        setInfoFilm(TabFilm);
        setIsLoading(false);
        clearTimeout(timer);
      }
      catch {
        setIsErr("is problem")
      }
    }, 500);
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
        ? (<Loading />)
        : (<BodyTable film={infoFilm} />)
      }
      { isErr && <div>{isErr}</div> }
  </section>
  )
}

export default TableInfoPlanets