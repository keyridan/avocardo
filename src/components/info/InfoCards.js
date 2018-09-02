import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import InfoPanel from './InfoPanel'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'
import { INFO_PROVIDERS } from '../../constants'
import { fromLanguageSelector, toLanguageSelector } from '../../selectors'

const styles = theme => ({
  container: {
    paddingTop: theme.spacing ? theme.spacing.unit * 6 : 0,
  },
})

const InfoCards = (
  {
    infos, infoProvider, classes,
  }) => (
  <div className={classes.container} >
    <Typography variant="title" gutterBottom >
      <TranslatedTextContainer value="additional_info" />
    </Typography >
    <InfoPanel
      info={infos.LEO}
      type="LEO"
      key="LEO"
      checked={infoProvider.LEO.checked}
    />
    <InfoPanel
      info={infos.TATOEBA}
      type="TATOEBA"
      key="TATOEBA"
      rowSettings={{ from: toLanguageSelector, to: fromLanguageSelector }}
      checked={infoProvider.TATOEBA.checked}
    />
  </div >
)

InfoCards.propTypes = {
  classes: PropTypes.objectOf(styles).isRequired,
  infos: PropTypes.shape({
    [INFO_PROVIDERS]: PropTypes.object,
  }).isRequired,
  infoProvider: PropTypes.shape({
    LEO: PropTypes.shape({
      checked: PropTypes.bool.isRequired,
    }).isRequired,
    TATOEBA: PropTypes.shape({
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
}

export default withStyles(styles)(InfoCards)
