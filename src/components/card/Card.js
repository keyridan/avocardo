import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import DeckListContainer from '../../containers/card/DeckListContainer'
import FlashCardContainer from '../../containers/card/FlashCardContainer'
import AddCardToDeckButton from '../../containers/card/AddCardToDeckButton'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const styles = theme => ({
  container: {
    paddingTop: theme.spacing ? theme.spacing.unit * 6 : 0,
  },
  cardContainer: {
    flexDirection: 'column',
  },
})

const Card = ({ classes }) => (
  <div className={classes.container} >
    <Typography variant="title" >
      <TranslatedTextContainer value="tinycards_title" />
    </Typography >
    <Grid container spacing={8} className={classes.cardContainer} >
      <Grid item xs={12} >
        <DeckListContainer />
      </Grid >
      <Grid item xs={12} sm={4} >
        <AddCardToDeckButton />
      </Grid >
      <Grid item xs={12} >
        <FlashCardContainer />
      </Grid >
    </Grid >
  </div >
)

Card.propTypes = {
  classes: PropTypes.objectOf(styles).isRequired,
}

export default withStyles(styles)(Card)
