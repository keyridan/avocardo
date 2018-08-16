import { connect } from 'react-redux'
import ListLinkItem from '../components/ListLinkItem'
import { setWordToHistory } from '../actions'

const mapStateToProps = state => ({
  fromLanguage: state.fromLanguage,
  toLanguage: state.toLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setWordToHistory(ownProps.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ListLinkItem)
