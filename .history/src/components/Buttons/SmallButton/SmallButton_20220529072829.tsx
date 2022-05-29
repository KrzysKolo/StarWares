import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as SmallButtonStyles } from './SmallButton.module.scss';
//MODELS
import { SmallButtonProps } from '../../../models/SmallButtonProps';

const style = bemCssModules(SmallButtonStyles);

const SmallButton: React.FC<SmallButtonProps> = ({ title }) => {

  return (
     <button className={style()}>{title}</button>
    )
 }

export default SmallButton;