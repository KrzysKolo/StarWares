import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
import { HeaderTable } from '../tableComponents';


const style = bemCssModules(TableInfoPlanetsStyles);

export type TableInfoPlanetsProps = {
  text: string;
}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <section className={style()}>
      <HeaderTable isLoading={isLoading} />
      { isLoading
        ? (<div> Loading ...</div>)
        : (<div> { text }</div>)
      }
  </section>
  )
}

export default TableInfoPlanets