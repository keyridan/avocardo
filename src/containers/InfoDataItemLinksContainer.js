import { connect } from 'react-redux'
import ItemLinks from '../components/ItemLinks'

const mapStateToProps = state => ({
  fromLanguage: state.fromLanguage,
  toLanguage: state.toLanguage,
})

export default connect(mapStateToProps)(ItemLinks)
