import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'
import { setWordAndAndToHistory, translateAndSetValues } from '../actions'
import SimpleInput from '../components/SimpleInput'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'

const WordInput = ({ value, className, onChange, onEnterKey }) => (
  <div className={className} >
    <SimpleInput
      className="word_input"
      onChange={onChange}
      onEnterKey={onEnterKey}
      value={value}
    />
    <FormHelperText >
      <TranslatedTextContainer value="translate_text_helper" />
    </FormHelperText >
  </div >
)

WordInput.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterKey: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  value: state.word,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (event) => {
    dispatch(setWordAndAndToHistory(event.target.value, ownProps.history))
  },
  onEnterKey: () => {
    dispatch(translateAndSetValues())
  },
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordInput))
