import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as StarWaresPageStyles } from './StarWaresPage.module.scss';
import { Header, Button } from './../../components';

const style = bemCssModules(StarWaresPageStyles);
const handleShowFormToAddFilm = () => {
  console.log("Add film");
}

const StarWaresPage: React.FC = () => {
  return (
    <section className={style()}>
      <Header />
      <Button title="Add movie" variant='primary' onClick={} />
    </section>
  )
}

export default StarWaresPage;