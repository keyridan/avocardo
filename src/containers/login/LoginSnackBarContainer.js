import { connect } from 'react-redux'
import LoginSnackBarWrapper from '../../components/login/LoginSnackBar'
import { changeLoginFormState } from '../../actions/index'

const mapStateToProps = state => ({ loginFormState: state.loginFormState })

const mapDispatchToProps = {
  changeLoginFormState,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginSnackBarWrapper)
