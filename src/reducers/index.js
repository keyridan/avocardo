import { combineReducers } from 'redux'
import toLanguage from './toLanguage'
import fromLanguage from './fromLanguage'
import word from './word'
import translation from './translation'
import translationResult from './translationResult'
import tinyCardsLogin from './tinyCardsLogin'
import token from './token'
import loginFormState from './loginFormState'
import decks from './decks'
import deckListState from './deckListState'
import deck from './deck'
import frontSide from './frontSide'
import backSide from './backSide'
import addCardToDeckPending from './addCardToDeckPending'
import recentToLanguages from './recentToLanguages'
import recentFromLanguages from './recentFromLanguages'
import language from './language'
import infos from './infos'
import infoProvider from './infoProvider'
import chooseLanguageState from './chooseLanguageState'
import themeType from './themeType'
import addBackSideSpeedDialState from './addBackSideSpeedDialState'
import image from './image'
import images from './images'
import userFormState from './userFormState'
import message from './message'
import languageSelectorState from './languageSelectorState'
import version from './version'

export default combineReducers({
  toLanguage,
  fromLanguage,
  word,
  translation,
  translationResult,
  tinyCardsLogin,
  token,
  loginFormState,
  userFormState,
  deck,
  decks,
  deckListState,
  flashCard: combineReducers({
    frontSide,
    backSide,
  }),
  addCardToDeckPending,
  recentToLanguages,
  recentFromLanguages,
  language,
  infos,
  infoProvider,
  chooseLanguageState,
  themeType,
  addBackSideSpeedDialState,
  image,
  images,
  message,
  languageSelectorState,
  version,
})

