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
}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text, item }) => {
  const { id } = item;
  const [state] = useLocalStorage("MyMovies", []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /* const [infofilm, setInfoFilm] = useState([]); */

console.log(item)
  useEffect(() => {
    if (id.length > 1) {
      const film = state.filter((film: any) => film.name === text);
      console.log(film)
    }
  });

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