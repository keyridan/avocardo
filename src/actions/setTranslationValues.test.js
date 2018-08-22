import { FACT_TYPE, SET_CARD_VALUES, SET_TRANSLATION_RESULT } from '../constants'
import { setCardValues, setTranslationResult } from './setTranslationValues'

describe('setTranslationResult action', () => {
  it('should create SET_TRANSLATION_RESULT with default values when empty', () => {
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

  it('should create SET_TRANSLATION_RESULT action, wordTo and options of wordTo', () => {
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
        options: [{
          word: wordTo,
        }],
      },
    }
    expect(translationResult).to.eql(expected)
  })

  it('should contain options of translatedWords and wordTo when translation has translatedWords then translationResult', () => {
    const wordTo = 'Apfel'
    const translation = {
      pair: {
        wordTo,
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
        wordTo,
        options: [{
          word: wordTo,
        }, {
          word: 'der Apfel',
        }, {
          word: 'wordWithoutArticle',
        }],
      },
    }
    expect(translationResult).to.eql(expected)
  })

  it('should not contain options of same translatedWord and wordTo when translatedWord is the same as wordTo', () => {
    const wordTo = 'Apfel'
    const translation = {
      pair: {
        wordTo,
        wordFrom: 'apple',
      },
      translatedWords: [{
        article: 'der',
        word: 'Apfel',
      }, {
        word: 'wordWithoutArticle',
      }, {
        word: wordTo,
      }],
    }
    const translationResult = setTranslationResult(translation)
    const expected = {
      type: SET_TRANSLATION_RESULT,
      payload: {
        wordTo,
        options: [{
          word: wordTo,
        }, {
          word: 'der Apfel',
        }, {
          word: 'wordWithoutArticle',
        }],
      },
    }
    expect(translationResult).to.eql(expected)
  })
})

describe('setCardValues action', () => {
  it('should create SET_CARD_VALUES with default values when empty', () => {
    const defaultResult = {
      frontSide: '',
      backSide: [],
    }
    const translationResult = setCardValues({})
    expect(translationResult).to.eql({
      type: SET_CARD_VALUES,
      payload: defaultResult,
    })
  })

  it('should create SET_CARD_VALUES action, frontSide, backSide', () => {
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
          type: FACT_TYPE.TEXT,
          value: wordTo,
          checked: 0,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })

  it('should contain backSides of translatedWords and wordTo when translation has translatedWords', () => {
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
          value: 'Apfel',
          checked: 0,
          type: FACT_TYPE.TEXT,
        }, {
          value: 'der Apfel',
          checked: 0,
          type: FACT_TYPE.TEXT,
        }, {
          value: 'wordWithoutArticle',
          checked: 0,
          type: FACT_TYPE.TEXT,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })

  it('should contain backSides of one same translatedWord and wordTo when translatedWord is the same as wordTo', () => {
    const wordTo = 'Apfel'
    const translation = {
      pair: {
        wordTo,
        wordFrom: 'apple',
      },
      translatedWords: [{
        article: 'der',
        word: 'Apfel',
      }, {
        word: 'wordWithoutArticle',
      }, {
        word: wordTo,
      }],
    }
    const cardValues = setCardValues(translation)
    const expected = {
      type: SET_CARD_VALUES,
      payload: {
        frontSide: 'apple',
        backSide: [{
          value: wordTo,
          checked: 0,
          type: FACT_TYPE.TEXT,
        }, {
          value: 'der Apfel',
          checked: 0,
          type: FACT_TYPE.TEXT,
        }, {
          value: 'wordWithoutArticle',
          checked: 0,
          type: FACT_TYPE.TEXT,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })

  it('should contain backSides of pair when translation has no translatedWords then card values ', () => {
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
          type: FACT_TYPE.TEXT,
          checked: 0,
        }],
      },
    }
    expect(cardValues).to.eql(expected)
  })
})
