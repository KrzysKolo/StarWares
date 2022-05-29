import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';
import RowInTable from '../RowInTable';
import { BodyTableProps } from '../../../models/BodyTableProps';

const style = bemCssModules(BodyTableStyles);

const BodyTable: React.FC<BodyTableProps> = ({ film }) => {

  const { planets } = film[0];

  return (
    <table className={style()}>
      { planets.map((item: any) => <RowInTable key={item.name} item={item} />) }
    </table>
  )
}

export default BodyTable;