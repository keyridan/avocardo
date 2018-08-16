import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import Progress from '../components/Progress'
import { setWordToHistoryOrClearHistory } from '../actions'

const TranslateButton = ({ className, translatePending, onClick }) => (
  <div className={`${className}_container`} >
    <SimpleButton
      className={className}
      active={translatePending}
      variant="raised"
      color="primary"
      onClick={onClick}
    >
      {translatePending ? 'pending_translation_btn' : 'translation_btn'}
    </SimpleButton >
    <Progress loading={translatePending} className={`${className}_progress`} />
  </div >
)

TranslateButton.propTypes = {
  className: PropTypes.string.isRequired,
  translatePending: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  ...state.translation,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(setWordToHistoryOrClearHistory())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslateButton)
