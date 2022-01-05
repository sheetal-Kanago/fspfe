import React from 'react'
import "./Card.scss";

const Card = props => {
  const {key,card}=props;
  
  return (
    <div className="card">
      <h3>{card.cardName}</h3>
      <h4>{card.decsription}</h4>
    </div>
  )
}

export default Card
