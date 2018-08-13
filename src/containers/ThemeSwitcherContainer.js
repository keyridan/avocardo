import { connect } from 'react-redux'
import { changeThemeTypeState } from '../actions'
import ThemeSwitcher from '../components/ThemeSwitcher'

const mapStateToProps = state => ({
  themeType: state.themeType,
})

const mapDispatchToProps = {
  changeThemeTypeState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeSwitcher)
