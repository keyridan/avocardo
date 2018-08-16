import React from 'react'
import PropTypes from 'prop-types'
import SimpleListItem from './SimpleListItem'
import ItemLinks from './ItemLinks'

const ListLinkItem = ({
  className, value, onClick, fromLanguage, toLanguage,
}) => (
  <SimpleListItem onClick={onClick} className={className} value={value} >
    <ItemLinks
      className={`${className}_link`}
      fromLanguage={fromLanguage}
      toLanguage={toLanguage}
      value={value}
    />
  </SimpleListItem >
)

ListLinkItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  fromLanguage: PropTypes.string.isRequired,
  toLanguage: PropTypes.string.isRequired,
}

export default ListLinkItem
