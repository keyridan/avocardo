import { connect } from 'react-redux'
import LanguageSelector from '../components/LanguageSelector'
import { chooseRecentFromLanguage } from '../actions'

const mapStateToProps = state => ({
  recentLanguages: state.recentFromLanguages,
  language: state.language,
})

const mapDispatchToProps = {
  chooseRecentLanguage: chooseRecentFromLanguage,
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
