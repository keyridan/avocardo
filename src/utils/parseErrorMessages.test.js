import parseErrorMessages from './parseErrorMessages'
import { FORBIDDEN_MESSAGE, INTERNAL_ERROR, SOMETHING_WENT_WRONG_MESSAGE, UNAUTHORIZED_MESSAGE, } from '../constants'

describe('parseErrorMessages', () => {
  it('should return empty when no status', () => {
    expect(parseErrorMessages({})).to.eql('')
  })
  it('should return UNAUTHORIZED_MESSAGE when status 401 and no specifiedMessages', () => {
    const payload = {
      status: 401,
    }
    expect(parseErrorMessages(payload)).to.eql(UNAUTHORIZED_MESSAGE)
  })
  it('should return specifiedMessage when status 401 and has specifiedMessages with this status', () => {
    const payload = {
      status: 401,
    }
    const specifiedMessages = {
      401: 'specified',
      403: 'anotherSpecified',
    }
    expect(parseErrorMessages(payload, specifiedMessages)).to.eql('specified')
  })
  it('should return UNAUTHORIZED_MESSAGE when status 401 and has specifiedMessages with another status', () => {
    const payload = {
      status: 401,
    }
    const specifiedMessages = {
      403: 'anotherSpecified',
    }
    expect(parseErrorMessages(payload, specifiedMessages)).to.eql(UNAUTHORIZED_MESSAGE)
  })
  it('should return FORBIDDEN_MESSAGE when status 403 and no specifiedMessages', () => {
    const payload = {
      status: 403,
    }
    expect(parseErrorMessages(payload)).to.eql(FORBIDDEN_MESSAGE)
  })
  it('should return INTERNAL_ERROR when status 500 and no specifiedMessages', () => {
    const payload = {
      status: 500,
    }
    expect(parseErrorMessages(payload)).to.eql(INTERNAL_ERROR)
  })
  it('should return SOMETHING_WENT_WRONG_MESSAGE when other status and no specifiedMessages', () => {
    const payload = {
      status: 10000,
    }
    expect(parseErrorMessages(payload)).to.eql(SOMETHING_WENT_WRONG_MESSAGE)
  })
})
