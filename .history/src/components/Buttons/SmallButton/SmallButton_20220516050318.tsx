import React from 'react';

export type SmallButtonProps = {
  title: string,
}
const SmallButton = ({ title }) => {
  return (
    <button className={style()}>
      {title}
    </button>
  )
}

export default SmallButton;