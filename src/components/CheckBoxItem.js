import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

const CheckBoxItem = ({ className, children, key, index, onClick, checked }) => (
  <ListItem key={key} dense className={className} >
    <Checkbox checked={checked} onClick={() => onClick(index)} key={key} />
    <ListItemText primary={children} key={key} />
  </ListItem >
)

CheckBoxItem.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  index: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
}

CheckBoxItem.defaultProps = {
  className: '',
}

export default CheckBoxItem
