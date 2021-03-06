import React from 'react'
import PropTypes from 'prop-types'
import InfoDataItemLinksContainer from '../../containers/info/InfoDataItemLinksContainer'
import { highlightedValue } from '../../highlightValue'

function highlightedItems(highlights, value, className) {
  return (highlights.length > 0
    ? highlightedValue({ highlights, value, className })
    : value.split(' ').map(item => ({ value: item })))
}

const HighlightedItemLinks = ({ highlights = [], value, className, to, from }) => (
  <InfoDataItemLinksContainer
    to={to}
    from={from}
    className="highlighted_link"
    value={value}
    items={highlightedItems(highlights, value, className)}
  />
)

HighlightedItemLinks.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    wordPart: PropTypes.string,
  })),
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default HighlightedItemLinks
