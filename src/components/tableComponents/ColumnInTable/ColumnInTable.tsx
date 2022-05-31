import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as ColumnInTableStyles } from './ColumnInTable.module.scss';
//MODELS
import { RowInTableProps } from '../../../models/RowInTableProps';

const style = bemCssModules(ColumnInTableStyles);

const ColumnInTable: React.FC<RowInTableProps> = ({ item }) => {
  return (
    <tbody className={style()}>
      <tr>
        <th>Planet Name</th>
        <td>{item.name}</td>
      </tr>
      <tr>
        <th>Rotation period</th>
        <td>{item.rotation_period}</td>
      </tr>
      <tr>
        <th>Orbital period</th>
        <td>{item.orbital_period}</td>
      </tr>
      <tr>
        <th>Diameter</th>
        <td>{item.diameter}</td>
      </tr>
      <tr>
        <th>Climate</th>
        <td>{item.climate}</td>
      </tr>
      <tr>
        <th>Surface water</th>
        <td>{item.surface_water}</td>
      </tr>
      <tr>
        <th>Population</th>
        <td>{item.population}</td>
      </tr>
    </tbody>
  )
}

export default ColumnInTable;