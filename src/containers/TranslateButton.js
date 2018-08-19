import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonWithProgress from '../components/ButtonWithProgress'
import { setWordToHistoryOrClearHistory } from '../actions'

const TranslateButton = ({ className, translatePending, onClick }) => (
  <ButtonWithProgress
    fullWidth
    className={className}
    loading={translatePending}
    onClick={onClick}
    buttonColor="primary"
    progressColor="secondary"
  >
    translation_btn
  </ButtonWithProgress >
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
