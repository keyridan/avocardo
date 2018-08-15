import { connect } from 'react-redux'
import TranslationItem from '../components/TranslationItem'
import { setWordToHistoryAndReverseLanguages } from '../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setWordToHistoryAndReverseLanguages(ownProps.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TranslationItem)
