import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as NotFoundStyles } from './NotFound.module.scss';
//ROUTER
import { Link } from 'react-router-dom';
//FILES
import error from './../../assets/images/error.png';

const style = bemCssModules(NotFoundStyles);

const NotFound: React.FC = () => {
  return (
    <section className={style()}>
      <div className={style('ErrorP')} >
        Not found this Page
      </div>
      <div className={style('LinkP')}>
        <Link to="/">Go Home</Link>
      </div>
      <div className={style('ErrorDiv')}>
        <img src={error} alt='Error' />
      </div>
    </section>
  )
}

export default NotFound;