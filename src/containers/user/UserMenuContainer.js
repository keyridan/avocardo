import { connect } from 'react-redux'
import UserMenu from '../../components/user/UserMenu'
import { changeUserFormState, logout } from '../../actions'

const mapStateToProps = state => ({
  user: state.tinyCardsLogin.identifier,
  userFormState: state.userFormState,
})

const mapDispatchToProps = {
  changeUserFormState,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
