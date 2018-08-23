import React from 'react'
import { connect } from 'react-redux'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'
import { setWord, setWordToHistoryOrClearHistory } from '../actions'
import SimpleInput from '../components/common/SimpleInput'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'

const WordInput = ({
  value, onChange, onEnterKey,
}) => (
  <div >
    <SimpleInput
      label={(<TranslatedTextContainer value="word_input_label" />)}
      fullWidth
      onChange={onChange}
      onEnterKey={onEnterKey}
      value={value}
    />
    <FormHelperText >
      <TranslatedTextContainer value="enter_text_helper" />
    </FormHelperText >
  </div >
)

WordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterKey: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  value: state.word,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => {
    dispatch(setWord(event.target.value))
  },
  onEnterKey: () => {
    dispatch(setWordToHistoryOrClearHistory())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordInput)
