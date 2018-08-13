import toLanguage from './toLanguage'
import { CHOOSE_TO_LANGUAGE } from '../constants'

describe('toLanguage reducer', () => {
  it('should handle initial state', () => {
    expect(toLanguage(undefined, {})).to.equal('DE')
  })

  it('should handle choose to language', () => {
    expect(toLanguage('DE', {
      type: CHOOSE_TO_LANGUAGE,
      payload: 'EN',
    })).to.equal('EN')
  })

  it('should change to default language when value is AUTO', () => {
    expect(toLanguage(undefined, {
      type: CHOOSE_TO_LANGUAGE,
      payload: 'AUTO',
    })).to.equal('DE')
  })
})
