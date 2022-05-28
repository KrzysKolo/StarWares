import React from 'react';

export type RowInTableProps = {
  item: any;
}
const RowInTable: React.FC<RowInTableProps> = ({ item}) => {
  return (
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
  )
}

export default RowInTable;