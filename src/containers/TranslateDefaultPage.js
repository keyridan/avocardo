import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TranslationPage from '../components/TranslationPage'

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslationPage))
