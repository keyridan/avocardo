import { connect } from 'react-redux'
import ItemLinks from '../components/ItemLinks'

const mapStateToProps = state => ({
  toLanguage: state.fromLanguage,
  fromLanguage: state.toLanguage,
})

export default connect(mapStateToProps)(ItemLinks)
