import { connect } from 'react-redux'
import ToLanguageButtonBar from '../components/ToLanguageButtonBar'

const mapStateToProps = state => ({
  recentToLanguages: state.recentToLanguages,
})

export default connect(mapStateToProps)(ToLanguageButtonBar)
