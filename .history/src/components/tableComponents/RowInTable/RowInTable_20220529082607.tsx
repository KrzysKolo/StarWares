import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as RowInTableStyles } from './RowInTable.module.scss';
import { Planet } from '../../../models/Planet';

const style = bemCssModules(RowInTableStyles);


const RowInTable: React.FC<RowInTableProps> = ({ item}) => {
  return (
    <tr className={style()}>
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
  )
}

export default RowInTable;