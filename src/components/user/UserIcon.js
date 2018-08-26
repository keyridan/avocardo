import IconButton from '@material-ui/core/IconButton/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import React from 'react'
import PropTypes from 'prop-types'

const UserIcon = ({ changeUserFormState }) => (
  <IconButton
    aria-owns="menu-appbar"
    aria-haspopup="true"
    onClick={event => changeUserFormState(event.currentTarget)}
    color="inherit"
  >
    <AccountCircle />
  </IconButton>
)

UserIcon.propTypes = {
  changeUserFormState: PropTypes.func.isRequired,
}


export default UserIcon
