import React, { useState } from 'react';

export type FormAddMovieProps = {

};
const FormAddMovie: React.FC<FormAddMovieProps> = ({ }) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <form>FormAddMovie</form>
  )
}

export default FormAddMovie;