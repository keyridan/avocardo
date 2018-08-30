import { connect } from 'react-redux'
import LanguageSelector from '../components/LanguageSelector'
import { changeToLanguageSelectorState, chooseRecentToLanguage } from '../actions'

const mapStateToProps = state => ({
  language: state.language,
  openState: state.languageSelectorState.toLanguageSelectorOpen,
})

const mapDispatchToProps = {
  chooseRecentLanguage: chooseRecentToLanguage,
  changeOpenState: changeToLanguageSelectorState,
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
