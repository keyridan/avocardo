import React from 'react'
import PropTypes from 'prop-types'
import ToLanguageButton from '../containers/ToLanguageButton'
import { stringKey } from '../translation'

const ToLanguageButtonBar = ({ recentToLanguages }) => (
  <div >
    {recentToLanguages.map(item => (
      <ToLanguageButton
        key={item}
        value={item}
        color="primary"
        variant="contained"
      >
        {stringKey(item)}
      </ToLanguageButton >
    ))}
  </div >
)

ToLanguageButtonBar.propTypes = {
  recentToLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ToLanguageButtonBar
