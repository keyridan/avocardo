import { connect } from 'react-redux'
import TranslationItem from '../components/TranslationItem'
import { setWordAndTranslate } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setWordAndTranslate(ownProps.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TranslationItem)
