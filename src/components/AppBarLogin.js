import React from 'react'
import LoginSnackBarContainer from '../containers/LoginSnackBarContainer'
import AppBarLoginButton from '../containers/AppBarLoginButton'
import s from './AppBarLogin.css'

const AppBarLogin = () => (
  <div className={s.bar_login} >
    <AppBarLoginButton />
    <LoginSnackBarContainer />
  </div >
)

export default AppBarLogin
