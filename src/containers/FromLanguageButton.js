import { connect } from 'react-redux'
import { setFromLanguage } from '../actions'
import SimpleButton from '../components/SimpleButton'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.value === state.fromLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFromLanguage(ownProps.value))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleButton)
