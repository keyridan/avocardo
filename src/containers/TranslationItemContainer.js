import { connect } from 'react-redux'
import LinstLinkItem from '../components/ListLinkItem'
import { setWordToHistoryAndReverseLanguages } from '../actions'

const mapStateToProps = state => ({
  fromLanguage: state.toLanguage,
  toLanguage: state.fromLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setWordToHistoryAndReverseLanguages(ownProps.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LinstLinkItem)
