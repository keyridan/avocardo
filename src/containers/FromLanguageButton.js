import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import SimpleButton from '../components/SimpleButton'
import { setFromLanguage } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.value === state.fromLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFromLanguage(ownProps.value, ownProps.history))
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SimpleButton))
