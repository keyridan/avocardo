import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import DeckListContainer from '../containers/DeckListContainer'
import FlashCardContainer from '../containers/FlashCardContainer'
import AddCardToDeckButton from '../containers/AddCardToDeckButton'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import s from './Card.css'

const styles = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 6,
  },
})

const Card = ({ className, classes }) => (
  <div className={`${className} ${classes.container}`} >
    <Typography variant="title" >
      <TranslatedTextContainer value="tinycards_title" />
    </Typography>
    <DeckListContainer className={s.deck_list} />
    <FlashCardContainer className={s.flash_card} />
    <AddCardToDeckButton className={s.add_card_to_deck_btn} />
  </div >
)

export default withStyles(styles)(Card)
