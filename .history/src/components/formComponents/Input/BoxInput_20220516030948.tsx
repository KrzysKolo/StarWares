import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as BoxInputStyles } from './BoxInput.module.scss';

const style = bemCssModules(BoxInputStyles);

export type BoxInputProps = {
  title: string,
  placeholder: string,
  image?: string,
}

const BoxInput: React.FC = ({ title, placeholder, image}) => {
  return (
    <div>BoxInput</div>
  )
}

export default BoxInput;