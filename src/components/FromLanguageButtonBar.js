import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import FromLanguageButton from '../containers/FromLanguageButton'
import LanguageFromSelectorContainer from '../containers/LanguageFromSelectorContainer'
import { stringKey } from '../translation'

const styles = theme => ({
  languagesColumn: {
    [theme.breakpoints && theme.breakpoints.up('sm')]: {
      flexBasis: 'auto',
    },
  },
})

const FromLanguageButtonBar = ({ classes, recentFromLanguages }) => {
  const languages = [...recentFromLanguages, 'AUTO']
  return (
    <Grid container spacing={8} >
      <Grid item xs={12} sm={11} className={classes.languagesColumn}>
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
      <Grid item xs={12} sm={1} >
        <LanguageFromSelectorContainer />
      </Grid >
    </Grid >
  )
}

FromLanguageButtonBar.propTypes = {
  classes: PropTypes.objectOf(styles).isRequired,
  recentFromLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default withStyles(styles)(FromLanguageButtonBar)
