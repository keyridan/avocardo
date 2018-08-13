import React from 'react'
import DeckListContainer from '../containers/DeckListContainer'
import FlashCardContainer from '../containers/FlashCardContainer'
import AddCardToDeckButton from '../containers/AddCardToDeckButton'

const Card = ({ className }) => (
  <div className={className} >
    <DeckListContainer />
    <FlashCardContainer />
    <AddCardToDeckButton />
  </div >
)

export default Card
