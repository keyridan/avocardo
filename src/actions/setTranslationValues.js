import { SET_CARD_VALUES, SET_TRANSLATION_RESULT } from '../constants'

function getWord(item) {
  return item.article ? `${item.article} ${item.word}` : item.word;
}

function optionsFromTranslatedWords(translatedWords) {
  return translatedWords.map(item => (
    {
      word: getWord(item),
    }))
}

function backSideFromTranslatedWords(translatedWords) {
  return translatedWords.map(item => (
    {
      value: getWord(item),
      checked: 0,
    }))
}

function backSideFromPair({ wordTo }) {
  return [{
    value: wordTo || '',
    checked: 0,
  }]
}

export const setTranslationResult = ({ pair = {}, translatedWords = [] }) => {
  const options = translatedWords.length > 0
    ? optionsFromTranslatedWords(translatedWords)
    : []
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
    ? backSideFromTranslatedWords(translatedWords)
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

