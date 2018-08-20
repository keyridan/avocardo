import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    height: 19.6,
  },
})

const Progress = ({ className, color, classes }) => (
  <div className={`${className} ${classes.container}`}>
    <CircularProgress
      className={classes.progress}
      size={30}
      color={color}
    />
  </div>
)

Progress.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Progress.defaultProps = {
  color: 'secondary',
}

export default withStyles(styles)(Progress)
