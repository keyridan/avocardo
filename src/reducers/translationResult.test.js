import translationResult from './translationResult'
import { SET_TRANSLATION_RESULT } from '../constants'

describe('translationResult reducer', () => {
  it('should handle initial state', () => {
    expect(translationResult(undefined, {})).to.eql({
      wordTo: '',
      options: [],
    })
  })

  it('should handle choose from language', () => {
    expect(translationResult(undefined, {
      type: SET_TRANSLATION_RESULT,
      payload: { wordTo: 'test', options: ['test'] },
    })).to.eql({ wordTo: 'test', options: ['test'] })
  })
})
