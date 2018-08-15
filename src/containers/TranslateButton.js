import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import { setWordToHistory } from '../actions'

const TranslateButton = ({ className, translatePending, onClick }) => (
  <div className={className} >
    <SimpleButton
      className="btn_translate"
      active={translatePending}
      variant="raised"
      color="primary"
      onClick={onClick}
    >
      {translatePending ? 'pending_translation_btn' : 'translation_btn'}
    </SimpleButton >
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
    dispatch(setWordToHistory())
  },
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslateButton))
