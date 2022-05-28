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
      <tr>asasasa</tr>
      <tr>asasasa</tr>
    </table>
  )
}

export default BodyTable;