import { SET_CARD_VALUES, SET_TRANSLATION_RESULT } from '../constants'

function getWord(item) {
  return item.article ? `${item.article} ${item.word}` : item.word
}

const setOfAllNotEmptyValues = ({ wordTo, translatedWords }) => (
  new Set([
    wordTo || '',
    ...translatedWords.map(item => getWord(item)),
  ].filter(item => item !== ''))
)

const option = word => ({
  word,
})

const backside = value => ({
  value,
  checked: 0,
})

const optionFromPair = ({ wordTo }) => (
  wordTo
    ? [option(wordTo)]
    : []
)

const backSideFromPair = ({ wordTo }) => (
  wordTo
    ? [backside(wordTo)]
    : []
)

function optionsFromTranslatedWords(translatedWords, wordTo) {
  return Array.from(setOfAllNotEmptyValues({ wordTo, translatedWords }))
    .map(item => (
      option(item)))
}

function backSideFromTranslatedWords(translatedWords, wordTo) {
  return Array.from(setOfAllNotEmptyValues({ wordTo, translatedWords }))
    .map(item => (
      backside(item)))
}

export const setTranslationResult = ({ pair = {}, translatedWords = [] }) => {
  const options = translatedWords.length > 0
    ? optionsFromTranslatedWords(translatedWords, pair.wordTo)
    : optionFromPair(pair)
  const translationResult = {
    wordTo: pair.wordTo || '',
    options,
  }
  return {
    type: SET_TRANSLATION_RESULT,
    payload: translationResult,
  }
}

export const setCardValues = ({ pair = {}, translatedWords = [] }) => {
  const backSide = translatedWords.length > 0
    ? backSideFromTranslatedWords(translatedWords, pair.wordTo)
    : backSideFromPair(pair)
  const flashCard = {
    frontSide: pair.wordFrom || '',
    backSide,
  }
  return ({
    type: SET_CARD_VALUES,
    payload: flashCard,
  })
}

