import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import ToLanguageButton from '../containers/ToLanguageButton'
import LanguageToSelectorContainer from '../containers/LanguageToSelectorContainer'
import { stringKey } from '../translation'

const styles = theme => ({
  languagesColumn: {
    [theme.breakpoints && theme.breakpoints.up('sm')]: {
      flexBasis: 'auto',
    },
  },
})

const ToLanguageButtonBar = ({ classes, recentToLanguages }) => (
  <Grid container spacing={8} >
    <Grid item xs={12} sm={8} className={classes.languagesColumn}>
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
  classes: PropTypes.objectOf(styles).isRequired,
  recentToLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(ToLanguageButtonBar)
