import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import PropTypes from 'prop-types'
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

DeckItem.propTypes = {
  deck: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string.isRequired,
    }),
    PropTypes.string.isRequired,
  ]),
}

DeckItem.defaultProps = {
  deck: '',
}

export default DeckItem
