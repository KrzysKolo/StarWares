import React from 'react';

export type PlanetsListProps = {
  planetsList: string[];
}
const PlanetsList: React.FC<PlanetsListProps> = ({ planetsList }) => {
  return (
    <>
      {planetsList.map((item, i) =>
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