import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';
import arrowDown from './../../assets/svgs/arrowDown';

const style = bemCssModules(ButtonStyles);

export type ButtonProps = {
  title: string;
  variant: string,
};

const Button: React.FC<ButtonProps> = ({  title, variant }) => {
  return (
    <button className={style()}>
      <div className={style('text')}>{title}</div>
      { variant === 'primary'
        ? (<div className={style('circlePrimary')}>
            <img src={arrowDown} alt="Arrow Down" />
          </div>)
        : <div className={style('circleSecondary')}></div>
      }
    </button>
  )
}

export default Button