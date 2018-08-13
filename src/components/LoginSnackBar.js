import React from 'react'
import PropTypes from 'prop-types'
import Popover from '@material-ui/core/Popover'
import Paper from '@material-ui/core/Paper'
import TinyCardsLoginContainer from '../containers/LoginContainer'
import s from './LoginSnackBar.css'

const LoginSnackBar = ({ loginFormState, changeLoginFormState }) => (
  <div >
    <Popover
      className={s.login_snackbar}
      anchorEl={loginFormState.anchorEl}
      open={loginFormState.open}
      onClose={() => changeLoginFormState()}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Paper >
        <TinyCardsLoginContainer />
      </Paper >
    </Popover >
  </div >
)

LoginSnackBar.propTypes = {
  loginFormState: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.any,
  }).isRequired,
  changeLoginFormState: PropTypes.func.isRequired,
}

export default LoginSnackBar
