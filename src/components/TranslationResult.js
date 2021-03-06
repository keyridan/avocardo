import List from '@material-ui/core/List'
import React from 'react'
import PropTypes from 'prop-types'
import TranslationItemContainer from '../containers/TranslationItemContainer'

const TranslationResult = ({ translationResult }) => (
  <div >
    <List >
      {translationResult.options.length > 0
      && translationResult.options.map((item, index) => (
        <TranslationItemContainer
          key={item.word}
          value={item.word}
          index={index}
          className="translation-item"
        />
      ))}
    </List >
  </div >
)

TranslationResult.propTypes = {
  translationResult: PropTypes.shape({
    wordTo: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
}

export default TranslationResult
