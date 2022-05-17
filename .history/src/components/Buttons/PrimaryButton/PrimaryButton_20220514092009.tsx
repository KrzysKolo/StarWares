import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as PrimaryButtonStyles } from './PrimaryButton.module.scss';
import arrowDown from '../../../assets/svgs/icons/ArrowDown.svg';
import { PrimaryButtonProps } from '../../../models/PrimaryButtonProps';

const style = bemCssModules(PrimaryButtonStyles);

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, variant, onClick }) => {

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

export default PrimaryButton;