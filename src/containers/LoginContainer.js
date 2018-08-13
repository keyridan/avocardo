import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { login, setIdentifier, setPassword } from '../actions'

const mapStateToProps = state => ({ tinyCardsLogin: state.tinyCardsLogin })

const mapDispatchToProps = {
  setPassword,
  setIdentifier,
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
