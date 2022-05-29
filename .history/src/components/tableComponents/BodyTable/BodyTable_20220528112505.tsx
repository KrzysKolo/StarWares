import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';
import RowInTable from '../RowInTable';

const style = bemCssModules(BodyTableStyles);

export type BodyTableProps = {
  film: any;
}
const BodyTable: React.FC<BodyTableProps> = ({ film }) => {
  console.log(film);
  const { title, id, planets } = film[0];
  console.log(title)
  return (
    <table className={style()}>

    </table>
  )
}

export default BodyTable;