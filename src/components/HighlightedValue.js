import React from 'react'
import PropTypes from 'prop-types'
import { highlightedValue } from '../highlightValue'

const HighlightedValue = ({ highlights = [], value, className }) =>
  (highlights.length > 0
    ? highlightedValue({ highlights, value, className })
    : (<span >{value}</span >))


HighlightedValue.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    wordPart: PropTypes.string,
  })),
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default HighlightedValue
