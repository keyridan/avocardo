import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import LoginButton from '../containers/LoginButton'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import s from './LoginPage.css'

const LoginPage = ({ tinyCardsLogin, setIdentifier, setPassword }) => {
  const {
    identifier, password,
  } = tinyCardsLogin
  return (
    <div className={s.login_page} >
      <TextField
        id="email"
        key="email"
        label={<TranslatedTextContainer value="email" />}
        className="tiny-cards-login"
        type="e-mail"
        autoComplete="current-e-mail"
        margin="normal"
        onChange={event => setIdentifier(event.target.value)}
        value={identifier}
      />
      <br />
      <TextField
        id="password-input"
        label={<TranslatedTextContainer value="password" />}
        className="tiny-cards-password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        onChange={event => setPassword(event.target.value)}
        value={password}
      />
      <br />
      <LoginButton className={s.login_button} />
    </div >
  )
}

LoginPage.propTypes = {
  tinyCardsLogin: PropTypes.shape({
    identifier: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  setIdentifier: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
}

export default LoginPage
