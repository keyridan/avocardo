import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import TranslationItemLinksContainer from '../containers/TranslationItemLinksContainer'

const TranslationItem = ({ className, value, onClick }) => (
  <ListItem dense button onClick={onClick} className={className}>
    <TranslationItemLinksContainer value={value} />
  </ListItem>
)

TranslationItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default TranslationItem
