import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as PlanetsListStyles } from './PlanetsList.module.scss';

const style = bemCssModules(PlanetsListStyles);

export type PlanetsListProps = {
  planetsList: string[];
}
const PlanetsList: React.FC<PlanetsListProps> = ({ planetsList }) => {
  return (
    <article className={style()}>
      { planetsList.map((item, i) =>
      (
        <div className={style('listItem')} key={i}>
          <h3>{item}</h3>
          <div className={style('closeBTN')}>
            <div className={style('line1')}></div>
            <div className={style('line2')}></div>
          </div>
        </div>
      ))}
    </article>
  )
}

export default PlanetsList;