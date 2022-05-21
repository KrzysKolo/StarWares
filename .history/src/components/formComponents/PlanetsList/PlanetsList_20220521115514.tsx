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
        <div key={i}>
          <h1>{item}</h1>
          <span>X</span>
        </div>
      ))}
    </>
  )
}

export default PlanetsList;