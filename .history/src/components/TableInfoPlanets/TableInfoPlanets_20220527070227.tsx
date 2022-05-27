import React, { useState } from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
import { HeaderTable } from '../tableComponents';

const style = bemCssModules(TableInfoPlanetsStyles);

export type TableInfoPlanetsProps = {
  text: string;
}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <HeaderTable />
    { isLoading
        ? (<div className = { style() } > Loading ...</div>)
        : (<div className = { style() } > { text }</div>)
      }
  </>
  )
}

export default TableInfoPlanets