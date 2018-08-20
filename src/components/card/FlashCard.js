import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import SimpleInput from '../common/SimpleInput'
import CheckBoxCardItem from '../../containers/CheckBoxCardItem'
import s from './FlashCard.css'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
  },
})

const FlashCard = ({ frontSide, backSide, setFrontSide, setBackSideValue, classes }) => (
  <div className={s.flash_card} >
    <Grid container >
      <Grid item >
        <Table >
          <TableHead >
            <TableRow >
              <TableCell >
                <Typography color="textSecondary" >
                  <TranslatedTextContainer value="card_front_side_title" />
                </Typography >
              </TableCell >
            </TableRow >
          </TableHead >
          <TableBody >
            <TableRow >
              <TableCell >
                <Paper className={classes.card} >
                  <SimpleInput
                    value={frontSide}
                    onChange={(event) => {
                      setFrontSide(event.target.value)
                    }}
                  />
                </Paper >
              </TableCell >
            </TableRow >
          </TableBody >
        </Table >
      </Grid >
      <Grid item >
        <Table >
          <TableHead >
            <TableRow >
              <TableCell >
                <Typography color="textSecondary" >
                  <TranslatedTextContainer value="card_back_side_title" />
                </Typography >
              </TableCell >
            </TableRow >
          </TableHead >
          <TableBody >
            {backSide
              .map((backSideItem, index) => (
                <TableRow >
                  <TableCell >
                    <Paper className={classes.card} >
                      <CheckBoxCardItem
                        key={index}
                        checked={parseInt(backSideItem.checked)}
                        index={index}
                      >
                        <SimpleInput
                          key={index}
                          value={backSideItem.value}
                          onChange={event => setBackSideValue(event.target.value, index)}
                        />
                      </CheckBoxCardItem >
                    </Paper >
                  </TableCell >
                </TableRow >
              ))}
          </TableBody >
        </Table >
      </Grid >
    </Grid >
  </div >
)

FlashCard.propTypes = {
  frontSide: PropTypes.string.isRequired,
  backSide: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    checked: PropTypes.number,
  })).isRequired,
  setFrontSide: PropTypes.func.isRequired,
  setBackSideValue: PropTypes.func.isRequired,
  reverseCardSides: PropTypes.func.isRequired,
}

export default withStyles(styles)(FlashCard)
