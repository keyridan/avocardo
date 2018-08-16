import React from 'react'
import DeckListContainer from '../containers/DeckListContainer'
import FlashCardContainer from '../containers/FlashCardContainer'
import AddCardToDeckButton from '../containers/AddCardToDeckButton'
import s from './Card.css'

const Card = ({ className }) => (
  <div className={className} >
    <DeckListContainer className={s.deck_list} />
    <FlashCardContainer className={s.flash_card} />
    <AddCardToDeckButton className={s.add_card_to_deck_btn} />
  </div >
)

export default Card
