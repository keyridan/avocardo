import { connect } from 'react-redux'
import InfoProviderSwitcher from '../../components/info/InfoProviderSwitcher'
import { changeSwitcherState } from '../../actions/index'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  changeSwitcherState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoProviderSwitcher)
