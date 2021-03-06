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
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import InfoDataRow from './InfoDataRow'
import InfoDataItemLinksContainer from '../../containers/info/InfoDataItemLinksContainer'

const styles = theme => ({
  highlightedWord: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  },
})

const InfoTable = ({ rows, classes, rowSettings }) => (
  <div >
    {rows && (
      <Paper >
        {rows.map(row => (
          <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
              <Typography >{row.value}</Typography >
            </ExpansionPanelSummary >
            <ExpansionPanelDetails >
              <Grid container spacing={8} >
                {row.rows && row.rows.map((smallTitledRow, index) => (
                  <Grid key={index} item xs >
                    <Table >
                      <TableHead >
                        <TableRow >
                          <TableCell >
                            {smallTitledRow.value && (
                              <InfoDataItemLinksContainer
                                items={smallTitledRow.value.split(' ').map(item => ({ value: item }))}
                                value={smallTitledRow.value.trim()}
                              />
                            )}
                            {smallTitledRow.title}
                          </TableCell >
                        </TableRow >
                      </TableHead >
                      {smallTitledRow.infoData && smallTitledRow.infoData.map(infoData => (
                        <TableBody >
                          <InfoDataRow
                            rowSettings={rowSettings}
                            infoData={infoData}
                            highlightClassName={classes.highlightedWord}
                          />
                        </TableBody >
                      ))}
                    </Table >
                  </Grid >
                ))}
              </Grid >
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
  rowSettings: PropTypes.shape({
    from: PropTypes.func,
    to: PropTypes.func,
  }),
}

export default withStyles(styles)(InfoTable)
