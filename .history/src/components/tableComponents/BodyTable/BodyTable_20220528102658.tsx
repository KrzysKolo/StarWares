import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BodyTableStyles } from './BodyTable.module.scss';

const style = bemCssModules(BodyTableStyles);

export type BodyTableProps = {
  film: any;
}
const BodyTable: React.FC<BodyTableProps> = ({ film }) => {
  console.log(film);
  return (
    <table className={style()}>
   {/*    { film.map((film) => )} */}
     </table>
  )
}

export default BodyTable;