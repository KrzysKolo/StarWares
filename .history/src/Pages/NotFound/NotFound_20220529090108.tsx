import React from 'react';
//CSS
import { default as bemCssModules } from 'bem-css-modules';
import { default as NotFoundStyles } from './NotFound.module.scss';
//ROUTER
import { Link } from 'react-router-dom';
//FILES
import error from './../../assets/images/error.png';

const NotFound: React.FC = () => {
  return (
    <section>
      <div>
        Not found this Page
      </div>
      <div>
        <Link to="/">Go Home</Link>
      </div>
      <div>
        <img src={error} alt='Error' />
      </div>
    </section>
  )
}

export default NotFound;