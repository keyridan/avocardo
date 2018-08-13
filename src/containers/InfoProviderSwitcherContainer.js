import { connect } from 'react-redux'
import InfoProviderSwitcher from '../components/InfoProviderSwitcher'
import { changeSwitcherState } from '../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  changeSwitcherState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoProviderSwitcher)
