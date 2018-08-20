import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import HighlightedItemLinks from './HighlightedItemLinks'

const InfoDataRow = ({ infoData, highlightClassName }) => (
  <TableRow >
    {infoData.title && (
      <TableCell >{infoData.title}</TableCell >
    )}
    <TableCell >
      <HighlightedItemLinks
        value={infoData.value.trim()}
        highlights={infoData.highlights}
        className={highlightClassName}
      />
    </TableCell >
  </TableRow >
)

InfoDataRow.propTypes = {
  infoData: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      wordPart: PropTypes.string,
    })),
    title: PropTypes.string,
  })).isRequired,
  highlightClassName: PropTypes.string.isRequired,
}

export default InfoDataRow
