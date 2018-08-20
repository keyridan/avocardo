import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import InfoPanel from './InfoPanel'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import { INFO_PROVIDERS } from '../constants'

const styles = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 6,
  },
})

const InfoCards = ({
  infos, className, infoProvider, classes,
}) => (
  <div className={`${className} ${classes.container}`} >
    <Typography variant="title" gutterBottom >
      <TranslatedTextContainer value="additional_info" />
    </Typography >
    {INFO_PROVIDERS.map((provider, index) => (
      <InfoPanel
        info={infos[provider]}
        type={provider}
        key={index}
        checked={infoProvider[provider].checked}
      />
    ))}
  </div >
)

InfoCards.propTypes = {
  infos: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.object,
  })).isRequired,
  className: PropTypes.string.isRequired,
  infoProvider: PropTypes.object.isRequired,
}

export default withStyles(styles)(InfoCards)
