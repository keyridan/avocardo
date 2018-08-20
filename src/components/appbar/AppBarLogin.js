import React from 'react'
import LoginSnackBarContainer from '../../containers/login/LoginSnackBarContainer'
import AppBarLoginButton from '../../containers/appbar/AppBarLoginButton'
import s from './AppBarLogin.css'

const AppBarLogin = () => (
  <div className={s.bar_login} >
    <AppBarLoginButton />
    <LoginSnackBarContainer />
  </div >
)

export default AppBarLogin
