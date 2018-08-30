import { RSAA } from 'redux-api-middleware'
import { push } from 'connected-react-router'
import {
  ADD_CARD_TO_DECK_BEGIN,
  ADD_CARD_TO_DECK_FAILURE,
  ADD_CARD_TO_DECK_SUCCESS,
  ADD_CARD_TO_DECK_URL,
  BACKSIDE_QUANTITY_ERROR,
  CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE,
  CHANGE_CHOOSE_LANGUAGE_STATE,
  CHANGE_DECK_LIST_STATE,
  CHANGE_INFO_SWITCHER_STATE,
  CHANGE_OPEN_INPUT_IMAGE_STATE,
  CHANGE_OPEN_LOGIN_FORM,
  CHANGE_OPEN_USER_FORM, CHANGE_RECENT_FROM_LANGUAGE_SELECTOR_STATE, CHANGE_RECENT_TO_LANGUAGE_SELECTOR_STATE,
  CHANGE_SHOW_PASSWORD,
  CHANGE_THEME_TYPE_STATE,
  CHOOSE_DECK,
  CHOOSE_FROM_LANGUAGE,
  CHOOSE_LANGUAGE,
  CHOOSE_RECENT_FROM_LANGUAGE,
  CHOOSE_RECENT_TO_LANGUAGE,
  CHOOSE_TO_LANGUAGE,
  CLOSE_MESSAGE,
  FACT_TYPE,
  FETCH_DECKS_BEGIN,
  FETCH_DECKS_FAILURE,
  FETCH_DECKS_SUCCESS,
  FETCH_DECKS_URL,
  IMAGE_CLEAN,
  INFO_PROVIDERS,
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_URL,
  LOGOUT,
  SET_BACK_SIDE,
  SET_CARD_VALUES,
  SET_FRONT_SIDE,
  SET_IDENTIFIER,
  SET_IMAGE,
  SET_INFO_VALUES,
  SET_PASSWORD,
  SET_WORD,
  TOGGLE_OPTION,
  TRANSLATE_BEGIN,
  TRANSLATE_FAILURE,
  TRANSLATE_SUCCESS,
  TRANSLATE_URL,
} from '../constants'
import { backSideSelector, croppedImageSelector, imageSelector, openSpeedDialSelector, } from '../selectors'
import { setCardValues, setTranslationResult } from './setTranslationValues'

export * from './image'

export const closeMessage = () => ({
  type: CLOSE_MESSAGE,
})

export const changeFromLanguageSelectorState = () => ({
  type: CHANGE_RECENT_FROM_LANGUAGE_SELECTOR_STATE,
})

export const changeToLanguageSelectorState = () => ({
  type: CHANGE_RECENT_TO_LANGUAGE_SELECTOR_STATE,
})

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
      ...recentLanguages.slice(1),
      value,
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


export const openSpeedDial = () => ({
  type: CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE,
  payload: true,
})

export const closeSpeedDial = () => ({
  type: CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE,
  payload: false,
})

export const changeSpeedDialState = () => (dispatch, getState) => dispatch({
  payload: !openSpeedDialSelector(getState()),
  type: CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE,
})

export const changeOpenInputImageState = () => ({
  type: CHANGE_OPEN_INPUT_IMAGE_STATE,
})

export const addBackSideValue = () => (dispatch, getState) => {
  const backSide = backSideSelector(getState())
  const newValue = {
    checked: 1,
    type: FACT_TYPE.TEXT,
    value: '',
  }
  return dispatch({
    type: SET_BACK_SIDE,
    payload: {
      ...backSide,
      checkedItems: backSide.checkedItems + 1,
      values: [newValue, ...backSide.values],
    },
  })
}

const cleanImage = () => ({
  type: IMAGE_CLEAN,
})

const setImage = (value, itemIndex) => ({
  type: SET_IMAGE,
  payload: {
    ...value,
    itemIndex,
  },
})

export const openImageToCrop = (item, index) => (dispatch) => {
  dispatch(setImage(item.image, index))
  dispatch(changeOpenInputImageState())
}

const addOrUpdateBackSideImageValue = () => (dispatch, getState) => {
  const state = getState()
  const backSide = backSideSelector(state)
  const value = croppedImageSelector(state)
  const image = imageSelector(state)

  if (value) {
    let newValues
    let { checkedItems } = backSide
    const { values } = backSide
    const newValue = {
      checked: 1,
      type: FACT_TYPE.IMAGE,
      image,
      value,
    }
    if (image.itemIndex !== undefined && image.itemIndex !== null) {
      newValues = values.map((item, index) => ((image.itemIndex === index)
        ? {
          ...item,
          ...newValue,
        }
        : item))
    } else {
      newValues = [newValue, ...values]
      checkedItems += 1
    }
    return dispatch({
      type: SET_BACK_SIDE,
      payload: {
        ...backSide,
        checkedItems,
        values: newValues,
      },
    })
  }
}

export const closeAndClean = () => (dispatch) => {
  dispatch(changeOpenInputImageState())
  dispatch(cleanImage())
}

export const addOrUpdateBackSideImageValueAndClean = () => (dispatch) => {
  dispatch(addOrUpdateBackSideImageValue())
  dispatch(changeOpenInputImageState())
  dispatch(cleanImage())
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

export const removeBackSideItem = index => (dispatch, getState) => {
  const backSide = backSideSelector(getState())
  const newValues = backSide.values.filter((item, itemIndex) => index !== itemIndex)
  const checkedItems = newValues.filter(item => item.checked && item.checked === 1).length

  return dispatch({
    type: SET_BACK_SIDE,
    payload: {
      ...backSide,
      checkedItems,
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

export const changeUserFormState = anchorEl => ({
  type: CHANGE_OPEN_USER_FORM,
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
  payload: decodeURIComponent(value),
})

export const setIdentifier = value => ({
  type: SET_IDENTIFIER,
  payload: value,
})

export const setPassword = value => ({
  type: SET_PASSWORD,
  payload: value,
})

export const translate = ({
                            toLanguage, word, fromLanguage, infoProvider,
                          }) => {
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
    .map((option) => {
      switch (option.type) {
        case FACT_TYPE.IMAGE: {
          const imageValues = option.value.split(',')
          const mime = imageValues[0].match(/:(.*?);/)[1]
          return {
            fact: {
              type: option.type,
              details: {
                data: imageValues[1],
                imageType: mime,
              },
            },
          }
        }
        default:
          return {
            fact: { text: option.value, type: option.type },
          }
      }
    })
  const data = {
    sides: [
      {
        concepts: [{ fact: { text: flashCard.frontSide.values[0], type: FACT_TYPE.TEXT } }],
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

function fixedEncodeURI(str) {
  return encodeURIComponent(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}

export const translationLink = ({ fromLanguage, toLanguage, word }) => (
  `/${fromLanguage.toLowerCase()}/${toLanguage.toLowerCase()}/${fixedEncodeURI(word)}`
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
    : chooseFromLanguageAndAddToRecent(fromLanguage))
}

export const setToLanguageOrReverseLanguages = toLanguage => (dispatch, getState) => {
  const { fromLanguage } = getState()
  dispatch(toLanguage === fromLanguage
    ? reverseLanguages()
    : chooseToLanguageAndAddToRecent(toLanguage))
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

export const chooseRecentToLanguage = languagesObject => (
  setToLanguage(languagesObject.key)
)

export const chooseRecentFromLanguage = languagesObject => (
  setFromLanguage(languagesObject.key)
)

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

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
}
