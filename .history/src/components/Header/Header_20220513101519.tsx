import React from 'react';
import title from './../../assets/svgs/recruitment_task.svg'
import f from './../../assets/svgs/letters/Vector.svg'

const Header = () => {
  return (
    <header>
      <div>
      <img src={f} alt="Recruitment task" />
      </div>
      <img src={title} alt="Recruitment task" />
    </header>
  )
}

export default Header;
