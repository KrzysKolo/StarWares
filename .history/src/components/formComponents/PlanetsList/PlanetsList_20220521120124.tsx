import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as PlanetsListStyles } from './PlanetsList.module.scss';

const style = bemCssModules(PlanetsListStyles);

export type PlanetsListProps = {
  planetsList: string[];
}
const PlanetsList: React.FC<PlanetsListProps> = ({ planetsList }) => {
  return (
    <>
      { planetsList.map((item, i) =>
      (
        <div className={style()} key={i}>
          <h3>{item}</h3>
          <span>X</span>
        </div>
      ))}
    </>
  )
}

export default PlanetsList;