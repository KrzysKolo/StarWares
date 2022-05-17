import React from 'react';
import title from './../../assets/svgs/recruitment_task.svg'
import f from './../../assets/svgs/letters/Vector.svg'
import r from './../../assets/svgs/letters/Vector1.svg'
import o from './../../assets/svgs/letters/Vector2.svg'
import n from './../../assets/svgs/letters/Vector3.svg'
import t from './../../assets/svgs/letters/Vector4.svg'
import char from './../../assets/svgs/letters/Vector5.svg'
import e from './../../assets/svgs/letters/Vector6.svg'
import en from './../../assets/svgs/letters/Vector7.svg'
import d from './../../assets/svgs/letters/Vector8.svg'

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
