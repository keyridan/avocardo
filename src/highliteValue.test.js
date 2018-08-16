import React from 'react'
import { shallow } from 'enzyme'
import { highlightedValue } from './highlightValue'

describe('highlightedValue', () => {
  it('should create 2 spans with className when 2 highlights in 1 word value', () => {
    const value = 'Apfel'
    const highlights = [{
      wordPart: 'Apfel',
      value: 'Apfel',
    }]
    const highlightedResult = highlightedValue({ highlights, value, className: 'testClassName' })
    expect(highlightedResult, 'has 1 item').to.have.lengthOf(1)
    expect(highlightedResult[0].value, 'has value').to.equal('Apfel')
    const wrapper = shallow(highlightedResult[0].children)
    expect(wrapper.contains(<span className="testClassName" >Apfel</span >)).to.equal(true)
  })

  it('gelesen should create 2 spans with className when 2 highlights in 1 word value', () => {
    const value = 'gelesen'
    const highlights = [{
      wordPart: 'gel',
      value: 'ge',
    }, {
      wordPart: 'lesen',
      value: 'esen',
    }]
    const highlightedResult = highlightedValue({ highlights, value, className: 'testClassName' })
    expect(highlightedResult, 'has 1 item').to.have.lengthOf(1)
    expect(highlightedResult[0].value, 'has value').to.equal('gelesen')
    const wrapper = shallow(highlightedResult[0].children)
    expect(wrapper.contains(<span className="testClassName" >ge</span >)).to.equal(true)
    expect(wrapper.contains(<span className="testClassName" >esen</span >)).to.equal(true)
  })

  it('bigTestValue should create 2 spans with className when 2 highlights in 1 word value', () => {
    const value = 'many words and bigTestValue to highlight'
    const highlights = [{
      wordPart: 'igT',
      value: 'ig',
    }, {
      wordPart: 'Valu',
      value: 'alu',
    }]
    const highlightedResult = highlightedValue({ highlights, value, className: 'testClassName' })
    expect(highlightedResult, 'has 6 items').to.have.lengthOf(6)
    expect(highlightedResult[3].value, 'has value').to.equal('bigTestValue')
    const wrapper = shallow(highlightedResult[3].children)
    expect(wrapper.contains(<span className="testClassName" >ig</span >)).to.equal(true)
    expect(wrapper.contains(<span className="testClassName" >alu</span >)).to.equal(true)
  })
})
