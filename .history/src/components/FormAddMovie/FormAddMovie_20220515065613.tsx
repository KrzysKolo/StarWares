import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {

  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);

  return (
    <>
     { _stateWindowAddMovie && <form>FormAddMovie</form> }
    </>
  )
}

export default FormAddMovie;