import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
import { Header, Button } from './../../components';
import { handleShowFormToAddFilm } from '../../assets/function/addFilm';

const style = bemCssModules(StarWaresPageStyles);

const StarWaresPage: React.FC = () => {
  return (
    <section className={style()}>
      <Header />
      <Button title="Add movie" variant='primary' onClick={handleShowFormToAddFilm} />
    </section>
  )
}

export default StarWaresPage;