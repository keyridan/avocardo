import { RSAA } from 'redux-api-middleware'
import { push } from 'connected-react-router'
import {
  ADD_CARD_TO_DECK_BEGIN,
  ADD_CARD_TO_DECK_FAILURE,
  ADD_CARD_TO_DECK_SUCCESS,
  ADD_CARD_TO_DECK_URL,
  BACKSIDE_QUANTITY_ERROR,
  CHANGE_CHOOSE_LANGUAGE_STATE,
  CHANGE_DECK_LIST_STATE,
  CHANGE_INFO_SWITCHER_STATE,
  CHANGE_OPEN_LOGIN_FORM,
  CHANGE_SHOW_PASSWORD,
  CHANGE_THEME_TYPE_STATE,
  CHOOSE_DECK,
  CHOOSE_FROM_LANGUAGE,
  CHOOSE_LANGUAGE,
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
  TRANSLATE_BEGIN,
  TRANSLATE_FAILURE,
  TRANSLATE_SUCCESS,
  TRANSLATE_URL,
} from '../constants'

import { setCardValues, setTranslationResult } from './setTranslationValues'

export const toggleAllOptions = value => (dispatch, getState) => {
  const { backSide } = getState().flashCard
  const newBackSideValues = backSide.values.map(item => ({
    ...item,
    checked: value ? 1 : 0,
  }))

  return dispatch({
    type: TOGGLE_OPTION,
    payload: {
      ...backSide,
      checkedItems: value ? newBackSideValues.length : 0,
      values: newBackSideValues,
    },
  })
}
export const toggleOption = index => (dispatch, getState) => {
  const { backSide } = getState().flashCard

  const newBackSideValues = backSide.values.map((backSideItem, itemIndex) => ((itemIndex === index)
    ? { ...backSideItem, checked: backSideItem.checked === 0 ? 1 : 0 }
    : backSideItem))

  const checkedItems = newBackSideValues.filter(value => value.checked).length

  return dispatch({
    type: TOGGLE_OPTION,
    payload: {
      ...backSide,
      checkedItems,
      values: newBackSideValues,
    },
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

const addToRecentIfNotExist = (recentLanguages = [], value, dispatchChooseRecentLanguage) => {
  if (recentLanguages.indexOf(value) === -1 && value !== 'AUTO') {
    dispatchChooseRecentLanguage([
      value,
      ...recentLanguages,
    ])
  }
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

export const setFrontSideValue = (value, index) => (dispatch, getState) => {
  const { frontSide } = getState().flashCard
  const newValues = frontSide.values.map((item, itemIndex) => ((index === itemIndex)
    ? value
    : item))

  return dispatch({
    type: SET_FRONT_SIDE,
    payload: {
      ...frontSide,
      values: newValues,
    },
  })
}

export const setBackSideValue = (value, index) => (dispatch, getState) => {
  const { backSide } = getState().flashCard
  const newValues = backSide.values.map((item, itemIndex) => ((index === itemIndex)
    ? { ...item, value }
    : item))

  return dispatch({
    type: SET_BACK_SIDE,
    payload: {
      ...backSide,
      values: newValues,
    },
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

export const changeShowPassword = () => ({
  type: CHANGE_SHOW_PASSWORD,
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
      .map(providerList => providerList[0])
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
  const authorization = `${token.tokenType} ${token.accessToken}`
  return dispatch({
    [RSAA]: {
      endpoint: FETCH_DECKS_URL,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      types: [FETCH_DECKS_BEGIN, FETCH_DECKS_SUCCESS, FETCH_DECKS_FAILURE],
    },
  })
}

const sendCardToDeck = ({ flashCard, deck, token }) => (dispatch) => {
  const concepts = flashCard.backSide.values
    .filter(option => option.checked)
    .map(option => ({ fact: { text: option.value, type: 'TEXT' } }))
  const data = {
    sides: [
      {
        concepts: [{ fact: { text: flashCard.frontSide.values[0], type: 'TEXT' } }],
      },
      {
        concepts,
      },
    ],
  }
  const endpoint = `${ADD_CARD_TO_DECK_URL}${deck.id}`
  const authorization = `${token.tokenType} ${token.accessToken}`
  return dispatch({
    [RSAA]: {
      endpoint,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
      types: [ADD_CARD_TO_DECK_BEGIN, ADD_CARD_TO_DECK_SUCCESS, ADD_CARD_TO_DECK_FAILURE],
    },
  })
}

const addCardError = quantity => ({
  type: BACKSIDE_QUANTITY_ERROR,
  payload: quantity,
})

export const addCardToDeck = () => (dispatch, getState) => {
  const { backSide } = getState().flashCard
  return dispatch(backSide.maxCheckedItems >= backSide.checkedItems
    ? sendCardToDeck(getState())
    : addCardError(backSide.checkedItems))
}

export const translationLink = ({ fromLanguage, toLanguage, word }) => (
  `/${fromLanguage.toLowerCase()}/${toLanguage.toLowerCase()}/${word}`
)

export const translateAndSetValues = () => (dispatch, getState) =>
  dispatch(translate(getState())).then(() => {
    dispatch(setTranslationResult(getState().translation))
    dispatch(setCardValues(getState().translation))
    dispatch(setInfos(getState().translation.infos))
  })

export const setWordToHistoryAndReverseLanguages = value => (dispatch, getState) => {
  const { fromLanguage, toLanguage } = getState()
  const path = translationLink({
    fromLanguage: toLanguage,
    toLanguage: fromLanguage,
    word: value,
  })
  return dispatch(push(path))
}

const clearTranslationResult = () => dispatch => dispatch(setTranslationResult({}))

export const chooseFromLanguageAndAddToRecent = fromLanguage => (dispatch) => {
  dispatch(chooseFromLanguage(fromLanguage))
  dispatch(addToRecentFromIfNotExist(fromLanguage))
}

export const chooseToLanguageAndAddToRecent = toLanguage => (dispatch) => {
  dispatch(chooseToLanguage(toLanguage))
  dispatch(addToRecentToIfNotExist(toLanguage))
}

const reverseLanguages = () => (dispatch, getState) => {
  const { toLanguage, fromLanguage } = getState()
  dispatch(chooseFromLanguage(toLanguage))
  dispatch(addToRecentFromIfNotExist(toLanguage))
  dispatch(chooseToLanguage(fromLanguage))
  dispatch(addToRecentToIfNotExist(fromLanguage))
  dispatch(clearTranslationResult())
}

export const setFromLanguageOrReverseLanguages = fromLanguage => (dispatch, getState) => {
  const { toLanguage } = getState()
  dispatch(fromLanguage === toLanguage
    ? reverseLanguages()
    : chooseFromLanguage(fromLanguage))
}

export const setToLanguageOrReverseLanguages = toLanguage => (dispatch, getState) => {
  const { fromLanguage } = getState()
  dispatch(toLanguage === fromLanguage
    ? reverseLanguages()
    : chooseToLanguage(toLanguage))
}

const pushFromLanguage = newValue => (dispatch, getState) => {
  const { fromLanguage, toLanguage, word } = getState()
  return dispatch(push(newValue === toLanguage
    ? translationLink({ fromLanguage: newValue, toLanguage: fromLanguage, word })
    : translationLink({ fromLanguage: newValue, toLanguage, word })))
}

const pushToLanguage = newValue => (dispatch, getState) => {
  const { fromLanguage, toLanguage, word } = getState()
  return dispatch(push(newValue === fromLanguage
    ? translationLink({ fromLanguage: toLanguage, toLanguage: newValue, word })
    : translationLink({ fromLanguage, toLanguage: newValue, word })))
}

export const setFromLanguage = newValue => (dispatch, getState) => {
  const { word } = getState()
  return dispatch(word
    ? pushFromLanguage(newValue)
    : setFromLanguageOrReverseLanguages(newValue))
}

export const setToLanguage = newValue => (dispatch, getState) => {
  const { word } = getState()
  return dispatch(word
    ? pushToLanguage(newValue)
    : setToLanguageOrReverseLanguages(newValue))
}

const setWordToHistory = () => (dispatch, getState) => {
  const path = translationLink(getState())
  return dispatch(push(path))
}

const clearHistoryAndValues = () => (dispatch) => {
  dispatch(clearTranslationResult())
  return dispatch(push('/'))
}

export const setWordToHistoryOrClearHistory = () => (dispatch, getState) => {
  const { word } = getState()
  return dispatch(word
    ? setWordToHistory()
    : clearHistoryAndValues())
}
