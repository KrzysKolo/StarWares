import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as SmallButtonReadonlyStyles } from './SmallButtonReadonly.module.scss';
//MODELS
import { SmallButtonProps } from '../../../models/SmallButtonProps';

const style = bemCssModules(SmallButtonReadonlyStyles);

const SmallButtonReadonly: React.FC<SmallButtonProps> = ({ title}) =>  {

  return (
   <button className={style('button-disabled')} disabled>{title}</button>
   )
}

export default SmallButtonReadonly;