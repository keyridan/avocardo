import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import InfoDataRow from './InfoDataRow'
import s from './InfoTable.css'

const InfoTable = ({ rows }) => (
  <div >
    {rows && (
      <Paper >
        {rows.map(row => (
          <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
              <Typography >{row.value}</Typography >
            </ExpansionPanelSummary >
            <ExpansionPanelDetails className={s.info_table_container} >
              {row.rows && row.rows.map(smalTitledRow => (
                <Table className={s.info_table} >
                  <TableHead >
                    <TableRow >
                      <TableCell >{smalTitledRow.value}</TableCell >
                    </TableRow >
                  </TableHead >
                  {smalTitledRow.infoData && smalTitledRow.infoData.map(infoData => (
                    <TableBody className={s.info_table_body} >
                      <InfoDataRow
                        infoData={infoData}
                        highlightClassName={s.info_cell_highlight}
                      />
                    </TableBody >
                  ))}
                </Table >
              ))}
            </ExpansionPanelDetails >
          </ExpansionPanel >
        ))}
      </Paper >
    )}
  </div >
)

InfoTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  })),
}

export default InfoTable
