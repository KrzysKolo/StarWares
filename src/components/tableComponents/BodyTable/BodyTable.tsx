import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';
//COMPONENTS
import RowInTable from '../RowInTable';
//MODELS
import { BodyTableProps } from '../../../models/BodyTableProps';

const style = bemCssModules(BodyTableStyles);

const BodyTable: React.FC<BodyTableProps> = ({ film }) => {

  const { planets } = film[0];

  return (
    <table className={style()}>
      { planets.map((item: any) => <RowInTable key={item.name} item={item} />)}
    </table>
  )
}

export default BodyTable;