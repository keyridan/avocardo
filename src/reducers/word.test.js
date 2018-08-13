import word from './word'
import { SET_WORD } from '../constants'

describe('word reducer', () => {
  it('should handle initial state', () => {
    expect(word(undefined, {})).to.equal('')
  })

  it('should handle set word', () => {
    expect(word('', {
      type: SET_WORD,
      payload: 'testWord',
    })).to.equal('testWord')
  })
})
