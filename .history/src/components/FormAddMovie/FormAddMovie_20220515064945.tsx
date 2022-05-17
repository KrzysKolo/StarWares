import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { stateWindowAddMovie } from '../../features/windows/windowsSlice';

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {
  const _stateWindowAddMovie = useSelector(stateWindowAddMovie);
  const [isShowAddMovie, setIsShowAddMovie] = useState<boolean>(_stateWindowAddMovie);

  return (
    <>
     { isShowAddMovie && <form>FormAddMovie</form> }
    </>
  )
}

export default FormAddMovie;