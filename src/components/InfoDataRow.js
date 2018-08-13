import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import HighlightedValue from './HighlightedValue'
import s from './InfoTable.css'

const InfoDataRow = ({ infoData, highlightClassName }) => (
  <TableRow className={s.info_table_row} >
    {infoData.title && (
      <TableCell >{infoData.title}</TableCell >
    )}
    <TableCell >
      <HighlightedValue
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
