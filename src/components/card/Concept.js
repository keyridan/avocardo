import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import SimpleInput from '../common/SimpleInput'
import { FACT_TYPE } from '../../constants'

const styles = theme => ({
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    maxWidth: 200,
  },
})

const Concept = ({ classes, item, index, setValue }) => (
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
  </Paper >
)

Concept.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    checked: PropTypes.number,
  }).isRequired,
  setValue: PropTypes.func.isRequired,
}

export default withStyles(styles)(Concept)
