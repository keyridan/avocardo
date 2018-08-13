import fromLanguage from './fromLanguage'
import { CHOOSE_FROM_LANGUAGE } from '../constants'

describe('fromLanguage reducer', () => {
  it('should handle initial state', () => {
    expect(fromLanguage(undefined, {})).to.equal('EN')
  })

  it('should handle choose from language', () => {
    expect(fromLanguage('EN', {
      type: CHOOSE_FROM_LANGUAGE,
      payload: 'DE',
    })).to.equal('DE')
  })
})
