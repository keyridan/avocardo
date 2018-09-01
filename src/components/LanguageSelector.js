import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import { TextField, Typography, Paper, MenuItem, withStyles } from '@material-ui/core'
import { TRANSLATE_LANGUAGES } from '../constants'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import { translate } from '../translation'
import SimpleButton from './common/SimpleButton'

const formValuesFromArray = (array, language) => array.map(key => ({
  key,
  value: translate(TRANSLATE_LANGUAGES[key], language),
  label: (<TranslatedTextContainer value={TRANSLATE_LANGUAGES[key]} />),
}))

const styles = (theme) => {
  const noOptionMessagePadding = `${theme.spacing ? theme.spacing.unit : 0}px ${theme.spacing ? theme.spacing.unit * 2 : 0}px`
  return {
    root: {
      position: 'absolute',
      width: '200px',
      zIndex: 100,

    },
    input: {
      display: 'flex',
      padding: 0,
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
    },
    noOptionsMessage: {
      padding: noOptionMessagePadding,
    },
    singleValue: {
      fontSize: 16,
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      fontSize: 16,
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing ? theme.spacing.unit : 0,
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing ? theme.spacing.unit * 2 : 0,
    },
  }
}

function NoOptionsMessage(props) {
  const obj = (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
  return obj
}

NoOptionsMessage.propTypes = {
  props: PropTypes.shape({
    selectProps: PropTypes.any,
  }).isRequired,
}

function inputComponent(args) {
  const { inputRef, ...props } = args
  return <div ref={inputRef} {...props} />
}

function Control(props) {
  const obj = (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  )
  return obj
}

function Option(props) {
  const obj = (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  )
  return obj
}

function Placeholder(props) {
  const obj = (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
  return obj
}

function SingleValue(props) {
  const obj = (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  )
  return obj
}

function ValueContainer(props) {
  const obj = <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
  return obj
}

function Menu(props) {
  const obj = (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  )
  return obj
}

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
  Menu,
}

const suggestions = language => formValuesFromArray(
  Object
    .keys(TRANSLATE_LANGUAGES)
    .filter(key => key !== 'AUTO'),
  language,
).sort((a, b) => a.value.localeCompare(b.value))

const LanguageSelector = ({
  openState, changeOpenState, language, chooseRecentLanguage, classes, theme,
}) => {
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
    }),
  }
  return (
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
      <Paper className={classes.root}>
        <Select
          autoFocus
          menuIsOpen={openState}
          onMenuClose={changeOpenState}
          options={suggestions(language)}
          onChange={chooseRecentLanguage}
          classes={classes}
          styles={selectStyles}
          components={components}
        />
      </Paper>
    )}
    </div >
  )
}

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  openState: PropTypes.bool.isRequired,
  changeOpenState: PropTypes.func.isRequired,
  chooseRecentLanguage: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(styles).isRequired,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    palette: PropTypes.object,
  }).isRequired,
}

export default withStyles(styles, { withTheme: true })(LanguageSelector)
