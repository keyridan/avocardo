import { connect } from 'react-redux'
import LanguageSelector from '../components/LanguageSelector'
import { chooseRecentToLanguage } from '../actions'

const mapStateToProps = state => ({
  recentLanguages: state.recentToLanguages,
  language: state.language,
})

const mapDispatchToProps = {
  chooseRecentLanguage: chooseRecentToLanguage,
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
