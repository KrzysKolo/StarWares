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
        <th><h3>Planet Name</h3></th>
        <td><h3>{item.name}</h3></td>
      </tr>
      <tr>
        <th><h3>Rotation period</h3></th>
        <td><h4>{item.rotation_period}</h4></td>
      </tr>
      <tr>
        <th><h3>Orbital period</h3></th>
        <td><h4>{item.orbital_period}</h4></td>
      </tr>
      <tr>
        <th><h3>Diameter</h3></th>
        <td><h4>{item.diameter}</h4></td>
      </tr>
      <tr>
        <th><h3>Climate</h3></th>
        <td><h4>{item.climate}</h4></td>
      </tr>
      <tr>
        <th><h3>Surface water</h3></th>
        <td><h4>{item.surface_water}</h4></td>
      </tr>
      <tr>
        <th><h3>Population</h3></th>
        <td><h4>{item.population}</h4></td>
      </tr>
    </tbody>
  )
}

export default ColumnInTable;