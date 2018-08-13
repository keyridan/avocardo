import React from 'react'
import PropTypes from 'prop-types'
import FromLanguageButton from '../containers/FromLanguageButton'
import { stringKey } from '../translation'

const FromLanguageButtonBar = ({ className, recentFromLanguages }) => {
  const languages = [...recentFromLanguages, 'AUTO']
  return (
    <div className={className} >
      {languages.map(item => (
        <FromLanguageButton
          key={item}
          value={item}
          color="primary"
          variant="contained"
        >
          {stringKey(item)}
        </FromLanguageButton >
      ))}
    </div >
  )
}

FromLanguageButtonBar.propTypes = {
  className: PropTypes.string.isRequired,
  recentFromLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FromLanguageButtonBar
