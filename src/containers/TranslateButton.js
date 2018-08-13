import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import { translateAndSetValues } from '../actions'

const TranslateButton = ({ className, translatePending, translateAndSetValues }) => {
  return (
    <div className={className} >
      <SimpleButton
        className="btn_translate"
        active={translatePending}
        variant="raised"
        color="primary"
        onClick={translateAndSetValues}
      >
        {translatePending ? 'pending_translation_btn' : 'translation_btn'}
      </SimpleButton >
    </div >
  )
}


TranslateButton.propTypes = {
  translatePending: PropTypes.bool.isRequired,
  translateAndSetValues: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  ...state.translation,
})

const mapDispatchToProps = {
  translateAndSetValues,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslateButton)
