import fetchMock from 'fetch-mock'
import * as actions from './index'
import {
  CHOOSE_FROM_LANGUAGE,
  CHOOSE_RECENT_FROM_LANGUAGE,
  CHOOSE_RECENT_TO_LANGUAGE,
  CHOOSE_TO_LANGUAGE,
  FACT_TYPE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_URL,
  SET_CARD_VALUES,
  SET_INFO_VALUES,
  SET_TRANSLATION_RESULT,
  SET_WORD,
  TOGGLE_OPTION,
  TRANSLATE_BEGIN,
  TRANSLATE_SUCCESS,
  TRANSLATE_URL,
} from '../constants'
import mockStore from '../store/mockStore'

describe('actions', () => {
  it('toggleOption should create TOGGLE_OPTION action with new checked value', () => {
    const store = mockStore({
      flashCard: {
        backSide: {
          maxCheckedItems: 3,
          checkedItems: 0,
          values: [{
            value: 'word1',
            checked: 0,
          }, {
            value: 'word2',
            checked: 0,
          }],
        },
      },
    })
    const expected = {
      maxCheckedItems: 3,
      checkedItems: 1,
      values: [{
        value: 'word1',
        checked: 1,
      }, {
        value: 'word2',
        checked: 0,
      }],
    }
    expect(store.dispatch(actions.toggleOption(0))).to.eql({
      type: TOGGLE_OPTION,
      payload: expected,
    })
  })

  it('chooseFromLanguage should create CHOOSE_FROM_LANGUAGE action with fromLanguage value', () => {
    expect(actions.chooseFromLanguage('fromLanguage')).to.eql({
      type: CHOOSE_FROM_LANGUAGE,
      payload: 'fromLanguage',
    })
  })

  it('chooseToLanguage should create CHOOSE_TO_LANGUAGE action with toLanguage value', () => {
    expect(actions.chooseToLanguage('toLanguage')).to.eql({
      type: CHOOSE_TO_LANGUAGE,
      payload: 'toLanguage',
    })
  })

  it('setWord should create SET_WORD action with word value', () => {
    expect(actions.setWord('testWord')).to.eql({
      type: SET_WORD,
      payload: 'testWord',
    })
  })
})

describe('chooseRecentToLanguage', () => {
  it('should create CHOOSE_RECENT_TO_LANGUAGE and CHOOSE_RECENT_TO_LANGUAGE actions with language when new language', () => {
    const store = mockStore({
      fromLanguage: 'EN',
      toLanguage: 'DE',
      recentToLanguages: ['EN', 'ES', 'RU'],
    })
    const languagesObject = {
      key: 'FR',
      value: 'some FR value',
    }
    const expectedActions = [
      { type: CHOOSE_TO_LANGUAGE, payload: 'FR' },
      { type: CHOOSE_RECENT_TO_LANGUAGE, payload: ['ES', 'RU', 'FR'] },
    ]
    store.dispatch(actions.chooseRecentToLanguage(languagesObject))
    expect(store.getActions()).to.eql(expectedActions)
  })

  it('should reverse languages when language is the same as fromLanguage', () => {
    const store = mockStore({
      fromLanguage: 'EN',
      toLanguage: 'DE',
      recentFromLanguages: ['EN', 'ES', 'RU'],
      recentToLanguages: ['DE', 'ES', 'RU'],
    })
    const languagesObject = {
      key: 'EN',
      value: 'some EN value',
    }
    const expectedActions = [
      { type: CHOOSE_FROM_LANGUAGE, payload: 'DE' },
      { type: CHOOSE_RECENT_FROM_LANGUAGE, payload: ['ES', 'RU', 'DE'] },
      { type: CHOOSE_TO_LANGUAGE, payload: 'EN' },
      { type: CHOOSE_RECENT_TO_LANGUAGE, payload: ['ES', 'RU', 'EN'] },
      {
        type: SET_TRANSLATION_RESULT,
        payload: {
          options: [],
          wordTo: '',
        },
      },
    ]
    store.dispatch(actions.chooseRecentToLanguage(languagesObject))
    expect(store.getActions()).to.eql(expectedActions)
  })
})

describe('chooseRecentFromLanguage', () => {
  it('should create CHOOSE_RECENT_FROM_LANGUAGE and CHOOSE_FROM_LANGUAGE actions with language when new language', () => {
    const store = mockStore({
      fromLanguage: 'EN',
      toLanguage: 'DE',
      recentFromLanguages: ['EN', 'ES', 'RU'],
    })
    const languagesObject = {
      key: 'FR',
      value: 'some FR value',
    }
    const expectedActions = [
      { type: CHOOSE_FROM_LANGUAGE, payload: 'FR' },
      { type: CHOOSE_RECENT_FROM_LANGUAGE, payload: ['ES', 'RU', 'FR'] },
    ]
    store.dispatch(actions.chooseRecentFromLanguage(languagesObject))
    expect(store.getActions()).to.eql(expectedActions)
  })

  it('should reverse languages when language is the same as toLanguage', () => {
    const store = mockStore({
      fromLanguage: 'EN',
      toLanguage: 'DE',
      recentFromLanguages: ['EN', 'ES', 'RU'],
      recentToLanguages: ['DE', 'ES', 'RU'],
    })
    const languagesObject = {
      key: 'DE',
      value: 'some DE value',
    }
    const expectedActions = [
      { type: CHOOSE_FROM_LANGUAGE, payload: 'DE' },
      { type: CHOOSE_RECENT_FROM_LANGUAGE, payload: ['ES', 'RU', 'DE'] },
      { type: CHOOSE_TO_LANGUAGE, payload: 'EN' },
      { type: CHOOSE_RECENT_TO_LANGUAGE, payload: ['ES', 'RU', 'EN'] },
      {
        type: SET_TRANSLATION_RESULT,
        payload: {
          options: [],
          wordTo: '',
        },
      },
    ]
    store.dispatch(actions.chooseRecentFromLanguage(languagesObject))
    expect(store.getActions()).to.eql(expectedActions)
  })
})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  const headers = { 'Content-Type': 'application/json' }

  function mockPost(url, body) {
    fetchMock.postOnce(url, { body })
  }

  function mockTranslate(body) {
    mockPost(TRANSLATE_URL, body)
  }

  function mockLogin(body) {
    mockPost(LOGIN_URL, body)
  }

  const postOptionsWith = testValues => ({
    method: 'POST',
    body: JSON.stringify(testValues),
    credentials: undefined,
    headers,
  })

  it('should dispatch TRANSLATE_SUCCESS when translate is called', () => {
    const store = mockStore()
    const body = { testResult: 'testResult' }
    mockTranslate(body)
    const testValues = {
      word: 'test',
      fromLanguage: 'DE',
      toLanguage: 'EN',
      infoTypes: [],
    }
    const options = postOptionsWith(testValues)
    const expectedActions = [
      { type: TRANSLATE_BEGIN },
      { type: TRANSLATE_SUCCESS, payload: body, meta: undefined },
    ]
    return store.dispatch(actions.translate(testValues)).then(() => {
      expect(store.getActions()).to.eql(expectedActions)
      expect(fetchMock).route(TRANSLATE_URL).to.have.been.called.with.options(options)
    })
  })

  it('translateAndSetValues should dispatch translate and set values ', () => {
    const expectedTranslation = {
      pair: { wordTo: 'Apfel', wordFrom: 'apple' },
      translatedWords: [
        {
          article: 'der',
          word: 'Apfel',
        },
      ],
      infos: [],
    }
    const store = mockStore({
      fromLanguage: 'EN',
      toLanguage: 'DE',
      word: 'testWord',
      translation: expectedTranslation,
    })
    const expectedTranslationResult = {
      wordTo: 'Apfel',
      options: [{
        word: 'Apfel',
      }, {
        word: 'der Apfel',
      }],
    }
    const expectedCardValues = {
      frontSide: 'apple',
      backSide: [{
        value: 'Apfel',
        checked: 0,
        type: FACT_TYPE.TEXT,
      }, {
        value: 'der Apfel',
        checked: 0,
        type: FACT_TYPE.TEXT,
      }],
    }

    mockTranslate(expectedTranslation)
    const expectedActions = [
      { type: TRANSLATE_BEGIN },
      { type: TRANSLATE_SUCCESS, payload: expectedTranslation, meta: undefined },
      { type: SET_TRANSLATION_RESULT, payload: expectedTranslationResult },
      { type: SET_CARD_VALUES, payload: expectedCardValues },
      {
        type: SET_INFO_VALUES,
        payload: {
          LEO: {},
          TATOEBA: {},
        },
      },
    ]
    return store.dispatch(actions.translateAndSetValues()).then(() => {
      expect(store.getActions()).to.eql(expectedActions)
    })
  })

  it('should dispatch LOGIN_SUCCESS when login is called', () => {
    const tinyCardsLogin = {
      identifier: 'test',
      password: 'DE',
    }
    const store = mockStore({ tinyCardsLogin })
    const body = { testResult: 'testResult' }
    mockLogin(body)
    const options = postOptionsWith(tinyCardsLogin)
    const expectedActions = [
      { type: LOGIN_BEGIN },
      { type: LOGIN_SUCCESS, payload: body, meta: undefined },
    ]
    return store.dispatch(actions.login()).then(() => {
      expect(store.getActions()).to.eql(expectedActions)
      expect(fetchMock).route(LOGIN_URL).to.have.been.called.with.options(options)
    })
  })
})
