import React, { useEffect, useState } from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
//REDUX
import { getAllPlanetsApi } from '../../features/planets/planetsSlice';
import { getAllFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';
//COMPONENTS
import { HeaderTable, BodyTable } from '../tableComponents';
import { LoadingSmall } from '../../components';
import ErrorMessageComponent from '../tableComponents/ErrorMessageTable';
//MODELS
import { TableInfoPlanetsProps } from '../../models/TableInfoPlanetsProps';
import { Planet } from '../../models/Planet';
//FILES
import { useSelector } from 'react-redux';

const style = bemCssModules(TableInfoPlanetsStyles);

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text, item, isLoading, setIsLoading }) => {
  const { id } = item;
  const _filmFromLocalStorage = useSelector(getAllFilmsLocalStorage);
  const { filmsTab } = useSelector((store: any) => store.starWars);
  const _planets = useSelector(getAllPlanetsApi);
  const [infoFilm, setInfoFilm] = useState<Planet[]>([]);
  const [isErr, setIsErr] = useState<boolean>(false);
  const [isErrMessage, setIsErrMessage] = useState<string>('');

  const filmFromLocalStorage = () => {
    let timer = setTimeout(() => {
      try {
        let film = _filmFromLocalStorage.filter((item: any) => item.title === text);
        setInfoFilm(film);
        setIsLoading(false);
        clearTimeout(timer);
      }
      catch {
        setIsErr(!isErr);
        setIsErrMessage("There is a problem loading the data!");
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
        setIsErr(!isErr);
        setIsErrMessage("There is a problem loading the data!");
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
        ? (<LoadingSmall />)
        : (<BodyTable film={infoFilm} />)
      }
      { isErr && <ErrorMessageComponent message={isErrMessage} /> }
  </section>
  )
}

export default TableInfoPlanets;