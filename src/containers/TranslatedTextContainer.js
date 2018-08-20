import { connect } from 'react-redux'
import TranslatedText from '../components/common/TranslatedText'

const mapStateToProps = state => ({
  language: state.language,
})

export default connect(mapStateToProps)(TranslatedText)
