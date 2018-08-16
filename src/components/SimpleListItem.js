import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'

const SimpleListItem = ({
  className, value, onClick, children,
}) => (
  <ListItem className={className} >
    {children}
  </ListItem >
)

SimpleListItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SimpleListItem
