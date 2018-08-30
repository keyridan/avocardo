import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ToLanguageButton from '../containers/ToLanguageButton'
import LanguageToSelectorContainer from '../containers/LanguageToSelectorContainer'
import { stringKey } from '../translation'

const ToLanguageButtonBar = ({ recentToLanguages }) => (
  <Grid container spacing={8} >
    <Grid item xs={12} sm={8} >
      {recentToLanguages.map(item => (
        <ToLanguageButton
          key={item}
          value={item}
          color="primary"
          variant="outlined"
        >
          {stringKey(item)}
        </ToLanguageButton >
      ))}
    </Grid >
    <Grid item xs={12} sm={4} >
      <LanguageToSelectorContainer />
    </Grid >
  </Grid >
)

ToLanguageButtonBar.propTypes = {
  recentToLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ToLanguageButtonBar
