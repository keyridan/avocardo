import { connect } from 'react-redux'
import LoginSnackBarWrapper from '../components/LoginSnackBar'
import { changeLoginFormState } from '../actions'

const mapStateToProps = state => ({ loginFormState: state.loginFormState })

const mapDispatchToProps = {
  changeLoginFormState,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSnackBarWrapper)
