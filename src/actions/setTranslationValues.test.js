import { SET_CARD_VALUES, SET_TRANSLATION_RESULT } from '../constants'
import { setCardValues, setTranslationResult } from './setTranslationValues'

describe('setTranslationResult action', () => {
  it('setTranslationResult should create SET_TRANSLATION_RESULT action and wordTo', () => {
    const wordTo = 'Apfel'
    const translation = {
      pair: {
        wordTo,
        wordFrom: 'apple',
      },
      translatedWords: [],
    }
    const translationResult = setTranslationResult(translation)
    const expected = {
      type: SET_TRANSLATION_RESULT,
      payload: {
        wordTo,
        options: [],
      },
    }
    expect(translationResult).to.eql(expected)
  })

  it('when translation has translatedWords then translationResult should contain options of translatedWords', () => {
    const translation = {
      pair: {
        wordTo: 'Apfel',
        wordFrom: 'apple',
      },
      translatedWords: [{
        article: 'der',
        word: 'Apfel',
      }, {
        word: 'wordWithoutArticle',
      }],
    }
    const translationResult = setTranslationResult(translation)
    const expected = {
      type: SET_TRANSLATION_RESULT,
      payload: {
        wordTo: 'Apfel',
        options: [{
          word: 'der Apfel',
        }, {
          word: 'wordWithoutArticle',
        }],
      },
    }
    expect(translationResult).to.eql(expected)
  })

  it('setTranslationResult should create SET_TRANSLATION_RESULT with default values when empty', () => {
    const defaultResult = {
      wordTo: '',
      options: [],
    }
    const translationResult = setTranslationResult({})
    expect(translationResult).to.eql({
      type: SET_TRANSLATION_RESULT,
      payload: defaultResult,
    })
  })

  it('setCardValues should create SET_CARD_VALUES action, frontSide, backSide', () => {
    const wordTo = 'Apfel'
    const wordFrom = 'apple'
    const translation = {
      pair: {
        wordTo,
        wordFrom,
      },
      translatedWords: [],
    }
    const cardValues = setCardValues(translation)
    const expected = {
      type: SET_CARD_VALUES,
      payload: {
        frontSide: wordFrom,
        backSide: [{
          value: wordTo,
          checked: 0,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })

  it('when translation has translatedWords then card values should contain backSides of translatedWords', () => {
    const translation = {
      pair: {
        wordTo: 'Apfel',
        wordFrom: 'apple',
      },
      translatedWords: [{
        article: 'der',
        word: 'Apfel',
      }, {
        word: 'wordWithoutArticle',
      }],
    }
    const cardValues = setCardValues(translation)
    const expected = {
      type: SET_CARD_VALUES,
      payload: {
        frontSide: 'apple',
        backSide: [{
          value: 'der Apfel',
          checked: 0,
        }, {
          value: 'wordWithoutArticle',
          checked: 0,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })

  it('when translation has no translatedWords then card values should contain backSides of pair', () => {
    const translation = {
      pair: {
        wordTo: 'Apfel',
        wordFrom: 'apple',
      },
      translatedWords: [],
    }
    const cardValues = setCardValues(translation)
    const expected = {
      type: SET_CARD_VALUES,
      payload: {
        frontSide: 'apple',
        backSide: [{
          value: 'Apfel',
          checked: 0,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })
})
