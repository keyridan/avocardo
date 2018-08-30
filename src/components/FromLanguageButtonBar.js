import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FromLanguageButton from '../containers/FromLanguageButton'
import LanguageFromSelectorContainer from '../containers/LanguageFromSelectorContainer'
import { stringKey } from '../translation'

const FromLanguageButtonBar = ({ recentFromLanguages }) => {
  const languages = [...recentFromLanguages, 'AUTO']
  return (
    <Grid container spacing={8} >
      <Grid item xs={12} sm={8}>
        {languages.map(item => (
          <FromLanguageButton
            key={item}
            value={item}
            color="primary"
            variant="outlined"
          >
            {stringKey(item)}
          </FromLanguageButton >
        ))}
      </Grid >
      <Grid item xs={12} sm={4} >
        <LanguageFromSelectorContainer />
      </Grid >
    </Grid >
  )
}

FromLanguageButtonBar.propTypes = {
  recentFromLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FromLanguageButtonBar
