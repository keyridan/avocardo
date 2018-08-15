import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { translationLink } from '../actions'

const ItemLinks = ({ value, fromLanguage, toLanguage }) => (
  <div >
    {value.split(' ').map(item => (
// eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Link
        to={translationLink({
          fromLanguage: toLanguage,
          toLanguage: fromLanguage,
          word: item,
        })}
        key={fromLanguage + toLanguage + item}
      >
        {item}
      </Link >
    )).flatMap((element, i) => ([element,
      <span key={i} >
&nbsp;
      </span >]))
      .slice(0, -1)
    }
  </div >
)

ItemLinks.propTypes = {
  value: PropTypes.string.isRequired,
  fromLanguage: PropTypes.string.isRequired,
  toLanguage: PropTypes.string.isRequired,
}

export default ItemLinks
