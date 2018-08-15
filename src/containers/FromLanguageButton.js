import { connect } from 'react-redux'
import SimpleButton from '../components/SimpleButton'
import { setFromLanguage } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.value === state.fromLanguage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFromLanguage(ownProps.value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleButton)
