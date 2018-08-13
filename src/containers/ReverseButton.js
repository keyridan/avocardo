import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SwapHoriz from '@material-ui/icons/SwapHoriz'
import SimpleButton from '../components/SimpleButton'
import { reverseTranslationValuesAndTranslate } from '../actions'

const ReverseButton = ({ className, reverseTranslationValuesAndTranslate }) => (
  <div className={className} >
    <SimpleButton
      className="reverse_button"
      onClick={reverseTranslationValuesAndTranslate}
      color="primary"
    >
      <SwapHoriz />
    </SimpleButton >
  </div >
)

ReverseButton.propTypes = {
  reverseTranslationValuesAndTranslate: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  reverseTranslationValuesAndTranslate,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReverseButton)
