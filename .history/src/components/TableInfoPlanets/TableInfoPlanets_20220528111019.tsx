import React, { useEffect, useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
import { HeaderTable } from '../tableComponents';
import BodyTable from '../tableComponents/BodyTable';
import { useLocalStorage } from '../../services/costomHooks/useLocalStorage';
import { useSelector } from 'react-redux';
import { getAllFilmsLocalStorage } from '../../features/filmsFromLocalStorage/filmsFromLocalStorageSlice';


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
  console.log(_filmFromLocalStorage);
  const [infofilm, setInfoFilm] = useState([]);
  const [isErr, setIsErr] = useState('');

  const filmFromLocalStorage = () => {
    let timer = setTimeout(() => {

      try {

        setIsLoading(false);
        clearTimeout(timer);
      }
      catch {
        setIsErr('is problem');
      }
    }, 500)
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
      {_filmFromLocalStorage.map((item: any) => {
        <p key={item.id}>{item.name}</p>
      })}
      { isLoading
        ? (<div> Loading ...</div>)
        : (<BodyTable film={infofilm} />)
      }
  </section>
  )
}

export default TableInfoPlanets