import React from 'react'
import './Card.css'

const Card = ({children, clasName}) => {

  const madeClass = 'card ' + clasName;

  return (
    <div className={madeClass}>{children}</div>
  );
};

export default Card;