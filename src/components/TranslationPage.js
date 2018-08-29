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
import CardsAppBar from '../containers/appbar/CardsAppBar'
import InfoCardsContainer from '../containers/info/InfoCardsContainer'
import MessageContainer from '../containers/MessageContainer'
import Card from './card/Card'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 15,
  },
  translationContainer: {
    justifyContent: 'space-around',
  },
  result: {
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },
})

const TranslationPage = ({ classes }) => (
  <div >
    <MessageContainer />
    <CardsAppBar />
    <div className={classes.root} >
      <Grid container spacing={8} className={classes.translationContainer} >
        <Grid item xs={12} sm={5} >
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
        </Grid >
      </Grid >
      <Grid container spacing={8} >
        <Grid item xs={12} sm={5} className={classes.result} >
          <TranslationResultContainer />
        </Grid >
        <Grid item xs={12} sm={7} >
          <InfoCardsContainer />
          <Card />
        </Grid >
      </Grid >
    </div >
  </div >
)

export default withStyles(styles)(TranslationPage)
