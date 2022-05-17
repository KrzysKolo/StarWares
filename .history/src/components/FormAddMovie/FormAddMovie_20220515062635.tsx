import React, { useState } from 'react';

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {
  const [isShowAddMovie, setIsShowAddMovie] = useState<boolean>(true);
  return (
    <form>FormAddMovie</form>
  )
}

export default FormAddMovie;