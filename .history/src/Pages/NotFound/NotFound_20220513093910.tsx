import React from 'react';
import { Link } from 'react-router-dom';

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