import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';

const style = bemCssModules(BodyTableStyles);

export type BodyTableProps = {
  item: any;
}
const BodyTable: React.FC<BodyTableProps> = () => {
  return (
    <table className={style()}>
      <tr>
        <th>
          nagłówek 1
        </th>
        <td>tekst2</td>
        <td>tekst3</td>
        <td>tekst4</td>
        <td>tekst5</td>
        <td>tekst6</td>
        <td>tekst7</td>
      </tr>

    </table>
  )
}

export default BodyTable;