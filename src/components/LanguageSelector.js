import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import { TRANSLATE_LANGUAGES } from '../constants'
import { translate } from '../translation'
import SimpleButton from './common/SimpleButton'

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
).sort((a, b) => a.value.localeCompare(b.value))

const LanguageSelector = ({
  openState, changeOpenState, language, chooseRecentLanguage,
}) => (
  <div>
    {!openState && (
      <SimpleButton
        aria-label="More"
        color="primary"
        variant="outlined"
        onClick={changeOpenState}
      >
        <KeyboardArrowDown />
      </SimpleButton >
    )}
    {openState && (
      <Select
        autoFocus
        menuIsOpen={openState}
        onMenuClose={changeOpenState}
        options={suggestions(language)}
        onChange={chooseRecentLanguage}
      />
    )}
  </div >
)

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  openState: PropTypes.bool.isRequired,
  changeOpenState: PropTypes.func.isRequired,
  chooseRecentLanguage: PropTypes.func.isRequired,
}

export default LanguageSelector
