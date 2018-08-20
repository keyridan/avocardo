import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LoginButton from '../../containers/login/LoginButton'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'
import s from './LoginPage.css'

const styles = (theme) => {
  const padding = `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  return {
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    avatar: {
      width: 60,
      height: 60,
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding,
    },
    formHeader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    login: {
      marginBottom: theme.spacing.unit * 3,
    },
  }
}

const LoginPage = ({
  tinyCardsLogin, setIdentifier, setPassword, showPassword, changeShowPassword, login, classes,
}) => {
  const {
    identifier, password,
  } = tinyCardsLogin
  return (
    <div className={classes.layout} >
      <Paper className={classes.paper} >
        <div className={classes.formHeader} >
          <Avatar
            className={`${s.avatar} ${classes.avatar}`}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Duolingo_logo_with_owl.svg/229px-Duolingo_logo_with_owl.svg.png"
          />
          <Typography variant="headline" >
            <TranslatedTextContainer value="login_to_tiny_cards_form" />
          </Typography >
        </div >
        <FormControl margin="normal" required fullWidth >
          <InputLabel htmlFor="email" >
            <TranslatedTextContainer value="email-address" />
          </InputLabel >
          <Input
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={event => setIdentifier(event.target.value)}
            value={identifier}
          />
        </FormControl >
        <FormControl required fullWidth className={classes.login} >
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
        <LoginButton />
      </Paper >
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

export default withStyles(styles)(LoginPage)
