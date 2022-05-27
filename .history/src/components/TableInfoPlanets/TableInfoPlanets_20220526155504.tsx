import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as TableInfoPlanetsStyles } from './TableInfoPlanets.module.scss'
import { string } from 'yup';

const style = bemCssModules(TableInfoPlanetsStyles);

export type TableInfoPlanetsProps = {
  text: string;
}

const TableInfoPlanets: React.FC<TableInfoPlanetsProps> = ({ text }) => {
  return (
    <div className={style()}>{text}</div>
  )
}

export default TableInfoPlanets