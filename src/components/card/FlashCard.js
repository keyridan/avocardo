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
import Checkbox from '@material-ui/core/Checkbox'
import SimpleInput from '../common/SimpleInput'
import s from './FlashCard.css'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
  },
})

const FlashCard = ({
  frontSide, backSide, setFrontSide, setBackSideValue, classes, toggleOption, toggleAllOptions,
}) => (
  <div className={s.flash_card} >
    <Grid container >
      <Grid item xs={12} sm={2} >
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
      <Grid item xs={12} sm={4} >
        <Table >
          <TableHead >
            <TableRow >
              <TableCell >
                <Checkbox onChange={(_, checked) => toggleAllOptions(checked)} />
                {`${backSide.checkedItems}/${backSide.maxCheckedItems}`}
              </TableCell >
              <TableCell >
                <Typography color="textSecondary" >
                  <TranslatedTextContainer value="card_back_side_title" />
                </Typography >
              </TableCell >
            </TableRow >
          </TableHead >
          <TableBody >
            {backSide.values
              .map((backSideItem, index) => (
                <TableRow >
                  <TableCell >
                    <Checkbox
                      checked={parseInt(backSideItem.checked)}
                      onClick={() => toggleOption(index)}
                      key={index}
                    />
                  </TableCell >
                  <TableCell >
                    <Paper className={classes.card} >
                      <SimpleInput
                        key={index}
                        value={backSideItem.value}
                        onChange={event => setBackSideValue(event.target.value, index)}
                      />
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
  backSide: {
    maxCheckedItems: PropTypes.number.isRequired,
    checkedItems: PropTypes.number.isRequired,
    values: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      checked: PropTypes.number,
    })).isRequired,
  }.isRequired,
  setFrontSide: PropTypes.func.isRequired,
  setBackSideValue: PropTypes.func.isRequired,
}

export default withStyles(styles)(FlashCard)
