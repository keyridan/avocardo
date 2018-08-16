import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { changeShowPassword, login, setIdentifier, setPassword } from '../actions'

const mapStateToProps = state => ({
  tinyCardsLogin: state.tinyCardsLogin,
  showPassword: state.loginFormState.showPassword,
})

const mapDispatchToProps = {
  setPassword,
  setIdentifier,
  login,
  changeShowPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
