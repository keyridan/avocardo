import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import FromLanguageButtonBarContainer from '../containers/FromLanguageButtonBarContainer'
import LanguageFromSelectorContainer from '../containers/LanguageFromSelectorContainer'
import TranslationResultContainer from '../containers/TranslationResultContainer'
import ToLanguageButtonBarContainer from '../containers/ToLanguageButtonBarContainer'
import LanguageToSelectorContainer from '../containers/LanguageToSelectorContainer'
import WordInput from '../containers/WordInput'
import TranslateButton from '../containers/TranslateButton'
import CardsAppBar from '../containers/CardsAppBar'
import InfoCardsContainer from '../containers/InfoCardsContainer'
import Card from './Card'
import s from './TranslationPage.css'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  translationContainer: {
    justifyContent: 'space-around',
  },
})

const TranslationPage = ({ classes }) => (
  <div >
    <CardsAppBar />
    <div className={`${s.cards_content} ${classes.root}`} >
      <Grid container spacing={8} className={classes.translationContainer} >
        <Grid item xs={12} sm={5}>
          <LanguageFromSelectorContainer />
          <FromLanguageButtonBarContainer />
          <WordInput />
        </Grid >
        <Grid item >
          <TranslateButton />
        </Grid >
        <Grid item xs={12} sm={5} >
          <LanguageToSelectorContainer />
          <ToLanguageButtonBarContainer />
          <TranslationResultContainer />
        </Grid >
      </Grid >
    </div >
    <InfoCardsContainer className={s.infocards} />
    <Card className={s.flash_card_content} />
  </div >
)

export default withStyles(styles)(TranslationPage)
