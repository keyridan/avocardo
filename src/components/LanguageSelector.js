import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
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

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

function Control(props) {
  return (
    <TextField
      fullWidth
      // InputProps={{
      //   inputComponent,
      //   inputProps: {
      //   className: props.selectProps.classes.input,
      //   ref: props.innerRef,
      //   children: props.children,
      //   ...props.innerProps,
      // },
      // }}
    />
  )
}

function Option({ children }) {
  return (
    <MenuItem
      // buttonRef={props.innerRef}
      // selected={props.isFocused}
      component="div"
      // style={{
      //   fontWeight: props.isSelected ? 500 : 400,
      // }}
    >
      {children}
    </MenuItem >
  )
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      onDelete={props.removeProps.onClick}
    />
  )
}

const components = {
  MultiValue,
}

const LanguageSelector = ({
  className, classes, recentLanguages, language, chooseRecentLanguage,
}) => {
  const recentToLanguagesWithLabels = formValuesFromArray(recentLanguages, language)
  return (
    <div className={className} >
      <Select
        classes={classes}
        options={suggestions(language)}
        components={components}
        value={recentToLanguagesWithLabels}
        onChange={chooseRecentLanguage}
        placeholder={<TranslatedTextContainer value="select_multiple_languages" />}
        isMulti
      />
    </div >
  )
}

LanguageSelector.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  chooseRecentLanguage: PropTypes.func.isRequired,
}

LanguageSelector.defaultProps = {
  color: 'secondary',
  variant: 'raised',
  active: false,
  size: 'medium',
  value: '',
  className: '',
}

export default LanguageSelector
