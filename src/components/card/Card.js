import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import DeckListContainer from '../../containers/card/DeckListContainer'
import FlashCardContainer from '../../containers/card/FlashCardContainer'
import AddCardToDeckButton from '../../containers/card/AddCardToDeckButton'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const styles = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 6,
  },
  cardContainer: {},
})

const Card = ({ className, classes }) => (
  <div className={`${className} ${classes.container}`} >
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

export default withStyles(styles)(Card)
