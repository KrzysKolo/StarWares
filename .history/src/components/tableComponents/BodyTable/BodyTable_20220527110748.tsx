import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';

const style = bemCssModules(BodyTableStyles);

export type BodyTableProps = {
  item: any;
}
const BodyTable: React.FC<BodyTableProps> = ({item}) => {
  return (
    <table className={style()}>
      <tr>
        <th>
          {item.name}
        </th>
        <td>{item.rotation_period}</td>
        <td>{item.orbital_period}</td>
        <td>{item.diameter}</td>
        <td>{item.climate}</td>
        <td>{item.surface_water}</td>
        <td>{item.population}</td>
      </tr>
     </table>
  )
}

export default BodyTable;