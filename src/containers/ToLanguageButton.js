import { connect } from 'react-redux'
import { setToLanguage } from '../actions'
import SimpleButton from '../components/SimpleButton'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.value === state.toLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setToLanguage(ownProps.value))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleButton)
