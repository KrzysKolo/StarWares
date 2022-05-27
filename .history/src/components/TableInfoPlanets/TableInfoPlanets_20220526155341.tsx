import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'

const style = bemCssModules(TableInfoPlanetsStyles);

export type TableInfoPlanetsProps = {

}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ }) => {
  return (
    <div className={style()}>TableInfoPlanets</div>
  )
}

export default TableInfoPlanets