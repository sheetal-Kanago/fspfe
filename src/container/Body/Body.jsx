import React from 'react'
import Card from '../Card/Card'
import cards from '../../data/cards'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


const Body = () => {
  return (
    <div>
      {
        cards.map(card=>(
          // console.log(card.cardName)
          <Card key={card.cardID} card={card}/>
        ))
      } 
    </div>
  )
}

export default Body
