import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as PrimaryButtonStyles } from './PrimaryButton.module.scss';
import arrowDown from '../../../assets/images/ArrowDown.png';
import arrowUp from '../../../assets/images/ArrowUp.png';
import { PrimaryButtonProps } from '../../../models/PrimaryButtonProps';

const style = bemCssModules(PrimaryButtonStyles);

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, primary, onClick }) => {

  return (
    <button className={style()} onClick={onClick} >
      <div className={style('text')}>{title}</div>
      { primary
        ? (<div className={style('circlePrimary')}>
            <img src={arrowDown} alt="Arrow Down" />
          </div>)
        : <div className={style('circleSecondary')}>
          <img src={arrowUp} alt="Arrow Up" />
        </div>
      }
    </button>
  )
}

export default PrimaryButton;