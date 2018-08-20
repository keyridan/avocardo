import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonWithProgress from '../components/ButtonWithProgress'
import { setWordToHistoryOrClearHistory } from '../actions'

const TranslateButton = ({ translatePending, onClick }) => (
  <ButtonWithProgress
    fullWidth
    loading={translatePending}
    onClick={onClick}
    buttonColor="primary"
    progressColor="secondary"
  >
    translation_btn
  </ButtonWithProgress >
)

TranslateButton.propTypes = {
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
