import React from 'react'
import { connect } from 'react-redux'
import FormHelperText from '@material-ui/core/FormHelperText'
import { setWord, translateAndSetValues } from '../actions'
import SimpleInput from '../components/SimpleInput'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'

const WordInput = ({ value, setWord, className, translateAndSetValues }) => (
  <div className={className}>
    <SimpleInput
      className="word_input"
      onChange={(event) => {
        setWord(event.target.value)
      }}
      onEnterKey={translateAndSetValues}
      value={value}
    />
    <FormHelperText >
      <TranslatedTextContainer value="translate_text_helper" />
    </FormHelperText >
  </div >
)

const mapStateToProps = (state, _) => ({
  value: state.word,
})

const mapDispatchToProps = {
  setWord,
  translateAndSetValues,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordInput)
