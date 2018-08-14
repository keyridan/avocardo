import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setToLanguage } from '../actions'
import SimpleButton from '../components/SimpleButton'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.value === state.toLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setToLanguage(ownProps.value, ownProps.history))
  },
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleButton))
