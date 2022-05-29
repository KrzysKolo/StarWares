import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
import { HeaderTable } from '../tableComponents';
import BodyTable from '../tableComponents/BodyTable';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';


const style = bemCssModules(TableInfoPlanetsStyles);

export type TableInfoPlanetsProps = {
  text: string;
  item: any;
  isLoading: boolean;
  setIsLoading: React.MouseEventHandler<HTMLElement> | any;
}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text, item, isLoading, setIsLoading }) => {
  const { id } = item;
  const [state] = useLocalStorage("MyMovies", []);
  /* const [infofilm, setInfoFilm] = useState([]); */

  const filmFromLocalStorage = () => {
    /* const film = state.filter((film: any) => film.name === text); */
    console.log("film local")
    setIsLoading(false);
  };
  const filmFromAPI = () => {
    /* const film = state.filter((film: any) => film.name === text); */
    console.log("filmAPI")
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
        : (<BodyTable film={undefined} />)
      }
  </section>
  )
}

export default TableInfoPlanets