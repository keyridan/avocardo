import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import s from './DeckList.css'

const DeckItem = ({ deck }) => (
  <div >
    {deck.name
      ? (
        <div className={s.deck_item} >
          {deck.name}{deck.description ? ` - ${deck.description}` : ''}
          {deck.coverImageUrl && (<Avatar src={deck.coverImageUrl} className={s.deck_cover} />)}
        </div >
      )
      : ''
    }
  </div >
)

export default DeckItem
