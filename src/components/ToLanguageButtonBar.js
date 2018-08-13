import React from 'react'
import PropTypes from 'prop-types'
import ToLanguageButton from '../containers/ToLanguageButton'
import { stringKey } from '../translation'

const ToLanguageButtonBar = ({ className, recentToLanguages }) => (
  <div className={className} >
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
  className: PropTypes.string.isRequired,
  recentToLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ToLanguageButtonBar
