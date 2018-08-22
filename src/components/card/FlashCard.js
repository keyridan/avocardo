import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import SimpleInput from '../common/SimpleInput'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'
import CardSpeedDialContainer from '../../containers/card/CardSpeedDialContainer'
import Concept from './Concept'

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
  },
  back_side_title: {
    flexDirection: 'row',
  },
})

const FlashCard = ({ frontSide, backSide, setFrontSideValue, setBackSideValue, classes, toggleOption, toggleAllOptions, removeBackSideItem }) => (
  <div >
    <Grid container >
      <Grid item xs={12} sm={5} >
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
            {frontSide.values
              .map((item, index) => (
                <TableRow >
                  <TableCell >
                    <Paper className={classes.card} >
                      <SimpleInput
                        value={item}
                        key={index}
                        onChange={(event) => {
                          setFrontSideValue(event.target.value, index)
                        }}
                      />
                    </Paper >
                  </TableCell >
                </TableRow >
              ))}
          </TableBody >
        </Table >
      </Grid >
      <Grid item xs={12} sm={7} >
        <Table >
          <TableHead >
            <TableRow >
              <TableCell
                padding="none"
              >
                <Checkbox onChange={(_, checked) => toggleAllOptions(checked)} />
                {`${backSide.checkedItems}/${backSide.maxCheckedItems}`}
              </TableCell >
              <TableCell >
                <Typography color="textSecondary" >
                  <TranslatedTextContainer value="card_back_side_title" />
                </Typography >
                <CardSpeedDialContainer />
              </TableCell >
            </TableRow >
          </TableHead >
          <TableBody >
            {backSide.values
              .map((item, index) => (
                <TableRow >
                  <TableCell
                    padding="none"
                  >
                    <Checkbox
                      checked={parseInt(item.checked)}
                      onClick={() => toggleOption(index)}
                      key={index}
                    />
                  </TableCell >
                  <TableCell  >
                    <Concept
                      item={item}
                      index={index}
                      setValue={setBackSideValue}
                      removeItem={removeBackSideItem}
                    />
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
  setFrontSideValue: PropTypes.func.isRequired,
  setBackSideValue: PropTypes.func.isRequired,
  removeBackSideItem: PropTypes.func.isRequired,
}

export default withStyles(styles)(FlashCard)
