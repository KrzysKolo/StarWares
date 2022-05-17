import React from 'react';
import { HeaderH1 } from '../headers';
import title from './../../assets/svgs/recruitment_task.svg'


const Header = () => {
  return (
    <header>
      <HeaderH1 />
     <img src={title} alt="Recruitment task" />
    </header>
  )
}

export default Header;
