import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import InfoPanel from './InfoPanel'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'
import { INFO_PROVIDERS } from '../../constants'

const styles = theme => ({
  container: {
    paddingTop: theme.spacing ? theme.spacing.unit * 6 : 0,
  },
})

const InfoCards = ({
  infos, infoProvider, classes,
}) => (
  <div className={classes.container} >
    <Typography variant="title" gutterBottom >
      <TranslatedTextContainer value="additional_info" />
    </Typography >
    {INFO_PROVIDERS.map(provider => (
      <InfoPanel
        info={infos[provider]}
        type={provider}
        key={JSON.stringify(provider)}
        checked={infoProvider[provider].checked}
      />
    ))}
  </div >
)

InfoCards.propTypes = {
  classes: PropTypes.objectOf(styles).isRequired,
  infos: PropTypes.shape({
    [INFO_PROVIDERS]: PropTypes.object,
  }).isRequired,
  infoProvider: PropTypes.shape({
    [INFO_PROVIDERS]: PropTypes.shape({
      checked: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
}

export default withStyles(styles)(InfoCards)
