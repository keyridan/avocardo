import translation from './translation'
import { TRANSLATE_BEGIN, TRANSLATE_SUCCESS } from '../constants'

describe('translation reducer', () => {
  it('should handle initial state', () => {
    expect(translation(undefined, {})).to.eql({
      translatePending: false,
    })
  })

  it('should handle translate begin', () => {
    expect(translation(undefined, {
      type: TRANSLATE_BEGIN,
    })).to.eql({
      translatePending: true,
    })
  })

  it('should handle translate success', () => {
    expect(translation(undefined, {
      type: TRANSLATE_SUCCESS,
      payload: { value: 'testValue' },
    })).to.eql({
      value: 'testValue',
      translatePending: false,
    })
  })
})
