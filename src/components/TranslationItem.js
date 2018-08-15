import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const TranslationItem = ({ className, value, onClick }) => (
  <ListItem dense button onClick={() => onClick(value)} className={className} >
    <ListItemText primary={value} />
  </ListItem >
)

TranslationItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default TranslationItem
