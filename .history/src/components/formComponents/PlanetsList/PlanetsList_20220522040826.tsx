import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as PlanetsListStyles } from './PlanetsList.module.scss';

const style = bemCssModules(PlanetsListStyles);

export type PlanetsListProps = {
  planetsList: string[];
  remove: React.MouseEventHandler<HTMLElement> | any;
}
const PlanetsList: React.FC<PlanetsListProps> = ({ planetsList, remove }) => {
  return (
    <article className={style()}>
      { planetsList.map((item, i) =>
      (
        <div className={style('listItem')} key={i}>
          <h3>{item}</h3>
          <div className={style('aaa')} onClick={(item)=>remove(item)}>
            <span className={style('line1')}></span>
            <span className={style('line2')}></span>
          </div>
        </div>
      ))}
    </article>
  )
}

export default PlanetsList;