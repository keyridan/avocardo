import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LoginButton from '../containers/LoginButton'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import s from './LoginPage.css'

const LoginPage = ({ tinyCardsLogin, setIdentifier, setPassword, showPassword, changeShowPassword, login }) => {
  const {
    identifier, password,
  } = tinyCardsLogin
  return (
    <div className={s.login_page} >
      <div className={s.login_form} >
        <TextField
          id="email"
          key="email"
          label={<TranslatedTextContainer value="email-address" />}
          className="tiny-cards-login"
          type="e-mail"
          autoComplete="current-e-mail"
          margin="normal"
          onChange={event => setIdentifier(event.target.value)}
          value={identifier}
        />
        <FormControl >
          <InputLabel htmlFor="adornment-password" >
            <TranslatedTextContainer value="password" />
          </InputLabel >
          <Input
            id="adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            autoComplete="current-password"
            className="tiny-cards-password"
            onChange={event => setPassword(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                login()
              }
            }}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={changeShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton >
              </InputAdornment >
            }
          />
        </FormControl >
      </div >
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
  changeShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
}

export default LoginPage
