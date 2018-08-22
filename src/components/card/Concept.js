import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import SimpleInput from '../common/SimpleInput'
import { FACT_TYPE } from '../../constants'

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    position: 'relative',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    maxWidth: 200,
  },
  removeButton: {
    position: 'absolute',
    right: '-12px',
    top: '-12px',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
})

const Concept = ({ classes, item, index, setValue, removeItem }) => (
  <Paper className={classes.card} >
    {item.type === FACT_TYPE.TEXT && (
      <SimpleInput
        key={index}
        value={item.value}
        onChange={event => setValue(event.target.value, index)}
      />
    )}
    {item.type === FACT_TYPE.IMAGE && (
      <div className={classes.imgContainer} >
        <img
          src={item.value}
          alt="Cropped"
          className={classes.img}
        />
      </div >
    )}
    <IconButton
      className={classes.removeButton}
      onClick={() => removeItem(index)}
    >
      <Close />
    </IconButton >
  </Paper >
)

Concept.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    checked: PropTypes.number,
  }).isRequired,
  setValue: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default withStyles(styles)(Concept)
