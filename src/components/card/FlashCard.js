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
import AddBackSideSpeedDialContainer from '../../containers/card/AddBackSideSpeedDialContainer'
import Concept from './Concept'

const styles = theme => ({
  card: {
    // ...theme.mixins.gutters(),
    padding: theme.spacing ? (theme.spacing.unit * 2) : 0,
  },
  back_side_title: {
    flexDirection: 'row',
  },
})

const FlashCard = ({
  frontSide, backSide, setFrontSideValue, setBackSideValue, classes, toggleOption,
  toggleAllOptions, removeBackSideItem, openImageToCrop,
}) => (
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
                <TableRow key={JSON.stringify(item)}>
                  <TableCell >
                    <Paper className={classes.card} >
                      <SimpleInput
                        value={item}
                        key={JSON.stringify(item)}
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
                <AddBackSideSpeedDialContainer />
              </TableCell >
            </TableRow >
          </TableHead >
          <TableBody >
            {backSide.values
              .map((item, index) => (
                <TableRow key={JSON.stringify(item)}>
                  <TableCell
                    padding="none"
                  >
                    <Checkbox
                      checked={parseInt(item.checked, 10)}
                      onClick={() => toggleOption(index)}
                      key={JSON.stringify(item)}
                    />
                  </TableCell >
                  <TableCell>
                    <Concept
                      item={item}
                      index={index}
                      setValue={setBackSideValue}
                      removeItem={removeBackSideItem}
                      cropImage={openImageToCrop}
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
  classes: PropTypes.objectOf(styles).isRequired,
  frontSide: PropTypes.shape({
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  backSide: PropTypes.shape({
    maxCheckedItems: PropTypes.number.isRequired,
    checkedItems: PropTypes.number.isRequired,
    values: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      checked: PropTypes.number,
    })).isRequired,
  }).isRequired,
  setFrontSideValue: PropTypes.func.isRequired,
  setBackSideValue: PropTypes.func.isRequired,
  removeBackSideItem: PropTypes.func.isRequired,
  openImageToCrop: PropTypes.func.isRequired,
  toggleOption: PropTypes.func.isRequired,
  toggleAllOptions: PropTypes.func.isRequired,
}

export default withStyles(styles)(FlashCard)
