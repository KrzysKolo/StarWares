import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';
import arrowDown from '../../assets/svgs/icons/ArrowDown.svg';


const style = bemCssModules(ButtonStyles);

export type ButtonProps = {
  title: string;
  variant: string,
  onClick: React.MouseEventHandler<HTMLElement>,
};

const Button: React.FC<ButtonProps> = ({ title, variant, onClick }) => {

  return (
    <button className={style()} onClick={onClick} >
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