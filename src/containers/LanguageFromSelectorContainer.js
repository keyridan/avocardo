import { connect } from 'react-redux'
import LanguageSelector from '../components/LanguageSelector'
import { changeFromLanguageSelectorState, chooseRecentFromLanguage } from '../actions'

const mapStateToProps = state => ({
  language: state.language,
  openState: state.languageSelectorState.fromLanguageSelectorOpen,
})

const mapDispatchToProps = {
  chooseRecentLanguage: chooseRecentFromLanguage,
  changeOpenState: changeFromLanguageSelectorState,
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
