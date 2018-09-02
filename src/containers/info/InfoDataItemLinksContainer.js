import { connect } from 'react-redux'
import ItemLinks from '../../components/common/ItemLinks'

const mapStateToProps = (state, ownProps) => ({
  fromLanguage: ownProps.from ? ownProps.from(state) : state.fromLanguage,
  toLanguage: ownProps.to ? ownProps.to(state) : state.toLanguage,
})

export default connect(mapStateToProps)(ItemLinks)
