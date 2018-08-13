import { connect } from 'react-redux'
import FromLanguageButtonBar from '../components/FromLanguageButtonBar'

const mapStateToProps = state => ({
  recentFromLanguages: state.recentFromLanguages,
})

export default connect(mapStateToProps)(FromLanguageButtonBar)
