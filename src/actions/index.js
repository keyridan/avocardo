import { RSAA } from 'redux-api-middleware'
import {
  ADD_CARD_TO_DECK_BEGIN,
  ADD_CARD_TO_DECK_FAILURE,
  ADD_CARD_TO_DECK_SUCCESS,
  ADD_CARD_TO_DECK_URL, CHANGE_CHOOSE_LANGUAGE_STATE,
  CHANGE_DECK_LIST_STATE,
  CHANGE_INFO_SWITCHER_STATE,
  CHANGE_OPEN_LOGIN_FORM, CHANGE_THEME_TYPE_STATE,
  CHOOSE_DECK,
  CHOOSE_FROM_LANGUAGE, CHOOSE_LANGUAGE,
  CHOOSE_RECENT_FROM_LANGUAGE,
  CHOOSE_RECENT_TO_LANGUAGE,
  CHOOSE_TO_LANGUAGE,
  FETCH_DECKS_BEGIN,
  FETCH_DECKS_FAILURE,
  FETCH_DECKS_SUCCESS,
  FETCH_DECKS_URL,
  INFO_PROVIDERS,
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_URL,
  SET_BACK_SIDE,
  SET_CARD_VALUES,
  SET_FRONT_SIDE,
  SET_IDENTIFIER,
  SET_INFO_VALUES,
  SET_PASSWORD,
  SET_WORD,
  TOGGLE_OPTION,
  TOGGLE_OPTION_ERROR,
  TRANSLATE_BEGIN,
  TRANSLATE_FAILURE,
  TRANSLATE_SUCCESS,
  TRANSLATE_URL,
} from '../constants'

import { setCardValues, setTranslationResult } from './setTranslationValues'

export const toggleOption = index => (dispatch, getState) => {
  const { backSide } = getState().flashCard

  const newBackSide = backSide.map((backSideItem, itemIndex) =>
    ((itemIndex === index)
      ? { ...backSideItem, checked: backSideItem.checked === 0 ? 1 : 0 }
      : backSideItem))

  if (newBackSide.filter(item => item.checked === 1).length > 3) {
    return dispatch({
      type: TOGGLE_OPTION_ERROR,
      payload: backSide,
      message: 'you can select only 3 values',
    })
  }

  return dispatch({
    type: TOGGLE_OPTION,
    payload: newBackSide,
  })
}

function chooseRecentValuesWithType({ type, languagesValues }) {
  return {
    type,
    payload: languagesValues,
  }
}

function chooseRecentLanguage({ languages, type }) {
  const languagesValues = languages.map(item => item.key)
  return chooseRecentValuesWithType({ type, languagesValues })
}

function chooseRecentLanguageOrDefaultLanguage({ languagesObject, defaultLanguage, type }) {
  return (languagesObject && languagesObject.length > 0)
    ? chooseRecentLanguage({
      languages: languagesObject,
      type,
    })
    : chooseRecentValuesWithType({
      type,
      languagesValues: [defaultLanguage],
    })
}

export const chooseRecentToLanguage = languagesObject => (dispatch, getState) => (
  dispatch(chooseRecentLanguageOrDefaultLanguage({
    languagesObject,
    defaultLanguage: getState().toLanguage,
    type: CHOOSE_RECENT_TO_LANGUAGE,
  }))
)

export const chooseRecentFromLanguage = languagesObject => (dispatch, getState) => (
  dispatch(chooseRecentLanguageOrDefaultLanguage({
    languagesObject,
    defaultLanguage: getState().fromLanguage,
    type: CHOOSE_RECENT_FROM_LANGUAGE,
  }))
)

export const changeSwitcherState = type => (dispatch, getState) => {
  const { infoProvider } = getState()
  const typeInfoProviderState = {
    [type]: {
      ...infoProvider[type],
      checked: !infoProvider[type].checked,
    },
  }
  return dispatch({
    type: CHANGE_INFO_SWITCHER_STATE,
    payload: {
      ...infoProvider,
      ...typeInfoProviderState,
    },
  })
}

export const setInfos = (value) => {
  const info = {}
  INFO_PROVIDERS.forEach((provider) => {
    info[provider] = {}
  })
  value.forEach((infoElement) => {
    info[infoElement.type] = {
      ...infoElement,
    }
  })
  return {
    type: SET_INFO_VALUES,
    payload: info,
  }
}

export const setFrontSide = value => ({
  type: SET_FRONT_SIDE,
  payload: value,
})

const addToRecentIfNotExist = (recentLanguages = [], value, dispatchChooseRecentLanguage) => {
  recentLanguages.indexOf(value) !== -1 || dispatchChooseRecentLanguage([
    ...recentLanguages,
    value,
  ])
}

const addToRecentToIfNotExist = value => (dispatch, getState) => {
  const { recentToLanguages } = getState()
  return addToRecentIfNotExist(
    recentToLanguages,
    value,
    languages => dispatch(chooseRecentValuesWithType({
      type: CHOOSE_RECENT_TO_LANGUAGE,
      languagesValues: languages,
    })),
  )
}

const addToRecentFromIfNotExist = value => (dispatch, getState) => {
  const { recentFromLanguages } = getState()
  return addToRecentIfNotExist(
    recentFromLanguages,
    value,
    languages => dispatch(chooseRecentValuesWithType({
      type: CHOOSE_RECENT_FROM_LANGUAGE,
      languagesValues: languages,
    })),
  )
}

export const setBackSideValue = (value, index) => (dispatch, getState) => {
  const { backSide } = getState().flashCard
  const newBackSide = backSide.map((backSideItem, itemIndex) =>
    ((index === itemIndex)
      ? { ...backSideItem, value }
      : backSideItem))

  return dispatch({
    type: SET_BACK_SIDE,
    payload: newBackSide,
  })
}

export const reverseCardSides = () => (dispatch, getState) => {
  const { backSide, frontSide } = getState().flashCard
  const reversedCard = {
    frontSide: backSide[0].value || '',
    backSide: [{
      value: frontSide || '',
      checked: backSide[0].checked,
    }],
  }
  return dispatch({
    type: SET_CARD_VALUES,
    payload: reversedCard,
  })
}

export const changeThemeTypeState = () => ({
  type: CHANGE_THEME_TYPE_STATE,
})

export const changeLoginFormState = anchorEl => ({
  type: CHANGE_OPEN_LOGIN_FORM,
  payload: anchorEl,
})

export const changeDeckListState = () => ({
  type: CHANGE_DECK_LIST_STATE,
})

export const changeChooseLanguageState = anchorEl => ({
  type: CHANGE_CHOOSE_LANGUAGE_STATE,
  payload: anchorEl,
})

export const chooseLanguage = value => ({
  type: CHOOSE_LANGUAGE,
  payload: value,
})

export const chooseDeck = deck => ({
  type: CHOOSE_DECK,
  payload: deck,
})

export const chooseFromLanguage = fromLanguage => ({
  type: CHOOSE_FROM_LANGUAGE,
  payload: fromLanguage,
})

export const chooseToLanguage = toLanguage => ({
  type: CHOOSE_TO_LANGUAGE,
  payload: toLanguage,
})

export const setWord = value => ({
  type: SET_WORD,
  payload: value,
})

export const setIdentifier = value => ({
  type: SET_IDENTIFIER,
  payload: value,
})

export const setPassword = value => ({
  type: SET_PASSWORD,
  payload: value,
})

export const translate = ({ toLanguage, word, fromLanguage, infoProvider }) => {
  if (!word) {
    return Promise.resolve()
  }
  const activeProviders = infoProvider
    ? Object.entries(infoProvider).filter(providerList => providerList[1].checked)
      .map(prodiverList => prodiverList[0])
    : []
  return {
    [RSAA]: {
      endpoint: TRANSLATE_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        word,
        fromLanguage,
        toLanguage,
        infoTypes: activeProviders,
      }),
      types: [TRANSLATE_BEGIN, TRANSLATE_SUCCESS, TRANSLATE_FAILURE],
    },
  }
}

export const login = () => (dispatch, getState) => {
  const { identifier, password } = getState().tinyCardsLogin
  return dispatch({
    [RSAA]: {
      endpoint: LOGIN_URL,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier,
        password,
      }),
      types: [LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    },
  })
}

export const fetchDecks = () => (dispatch, getState) => {
  const { token } = getState()
  return dispatch({
    [RSAA]: {
      endpoint: FETCH_DECKS_URL,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token.tokenType} ${token.accessToken}`,
      },
      types: [FETCH_DECKS_BEGIN, FETCH_DECKS_SUCCESS, FETCH_DECKS_FAILURE],
    },
  })
}

export const addCardToDeck = () => (dispatch, getState) => {
  const { token, deck, flashCard } = getState()
  const concepts = flashCard.backSide
    .filter(option => option.checked)
    .map(option => ({ fact: { text: option.value, type: 'TEXT' } }))
  const data = {
    sides: [
      {
        concepts: [{ fact: { text: flashCard.frontSide, type: 'TEXT' } }],
      },
      {
        concepts,
      },
    ],
  }
  return dispatch({
    [RSAA]: {
      endpoint: `${ADD_CARD_TO_DECK_URL}${deck.id}`,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token.tokenType} ${token.accessToken}`,
      },
      types: [ADD_CARD_TO_DECK_BEGIN, ADD_CARD_TO_DECK_SUCCESS, ADD_CARD_TO_DECK_FAILURE],
    },
  })
}

export const translateAndSetValues = () => (dispatch, getState) =>
  dispatch(translate(getState())).then(() => {
    dispatch(setTranslationResult(getState().translation))
    dispatch(setCardValues(getState().translation))
    dispatch(setInfos(getState().translation.infos))
  })

const clearTranslationResult = () => dispatch => dispatch(setTranslationResult({}))

const reverseLanguages = () => (dispatch, getState) => {
  const { toLanguage, fromLanguage } = getState()
  dispatch(chooseFromLanguage(toLanguage))
  dispatch(addToRecentFromIfNotExist(toLanguage))
  dispatch(chooseToLanguage(fromLanguage))
  dispatch(addToRecentToIfNotExist(fromLanguage))
  dispatch(clearTranslationResult())
}

const reverseTranslation = () => (dispatch, getState) => {
  const { translationResult } = getState()
  dispatch(reverseLanguages())
  dispatch(setWord(translationResult.wordTo))
}

export const reverseTranslationValuesAndTranslate = () => (dispatch) => {
  dispatch(reverseTranslation())
  return dispatch(translateAndSetValues())
}

export const reverseLanguagesAndTranslate = () => (dispatch) => {
  dispatch(reverseLanguages())
  return dispatch(translateAndSetValues())
}

export const chooseToLanguageAndTranslate = toLanguage => (dispatch) => {
  dispatch(chooseToLanguage(toLanguage))
  dispatch(translateAndSetValues())
}

export const chooseFromLanguageAndTranslate = fromLanguage => (dispatch) => {
  dispatch(chooseFromLanguage(fromLanguage))
  dispatch(translateAndSetValues())
}

export const setFromLanguage = fromLanguage => (dispatch, getState) => {
  const { toLanguage } = getState()
  dispatch(fromLanguage === toLanguage
    ? reverseLanguagesAndTranslate()
    : chooseFromLanguageAndTranslate(fromLanguage))
}

export const setToLanguage = toLanguage => (dispatch, getState) => {
  const { fromLanguage } = getState()
  dispatch(toLanguage === fromLanguage
    ? reverseLanguagesAndTranslate()
    : chooseToLanguageAndTranslate(toLanguage))
}

export const setWordAndTranslate = value => (dispatch) => {
  dispatch(setWord(value))
  dispatch(reverseLanguagesAndTranslate())
}
