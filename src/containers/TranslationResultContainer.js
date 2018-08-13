import { connect } from 'react-redux'
import TranslationResult from '../components/TranslationResult'

const mapStateToProps = state => ({
  translationResult: state.translationResult,
})

export default connect(mapStateToProps)(TranslationResult)
