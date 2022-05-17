import React, { useState } from 'react';

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {
  const [isShowAddMovie, setIsShowAddMovie] = useState<boolean>(true);
  return (
    <>
     { isShowAddMovie && <form>FormAddMovie</form> }
    </>
  )
}

export default FormAddMovie;