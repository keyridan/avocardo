import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import { TRANSLATE_LANGUAGES } from '../constants'
import { translate } from '../translation'

const formValuesFromArray = (array, language) => array.map(key => ({
  key,
  value: translate(TRANSLATE_LANGUAGES[key], language),
  label: (<TranslatedTextContainer value={TRANSLATE_LANGUAGES[key]} />),
}))

const suggestions = language => formValuesFromArray(
  Object
    .keys(TRANSLATE_LANGUAGES)
    .filter(key => key !== 'AUTO'),
  language,
)

const LanguageSelector = (
  {
    className, classes, language, chooseRecentLanguage,
  }) => {
  return (
    <div className={className} >
      <Select
        classes={classes}
        options={suggestions(language)}
        onChange={chooseRecentLanguage}
      />
    </div >
  )
}

LanguageSelector.propTypes = {
  className: PropTypes.string,
  chooseRecentLanguage: PropTypes.func.isRequired,
}

LanguageSelector.defaultProps = {
  className: '',
}

export default LanguageSelector
