import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import SimpleButton from './SimpleButton'
import Progress from './Progress'

const style = () => ({
  container: {
    width: '100%',
    display: 'grid',
    gridTemplate: '1fr/ 1fr',
  },
  button: {
    gridRow: '1/2',
    gridColumn: '1/2',
  },
  progress: {
    gridRow: '1/2',
    gridColumn: '1/2',
  },
})

const ButtonWithProgress = ({
  className, disabled, loading, onClick, classes, progressColor, buttonColor, children, fullWidth,
}) => (
  <div className={`${className} ${classes.container}`} >
    <SimpleButton
      active={loading || disabled}
      fullWidth={fullWidth}
      color={buttonColor}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </SimpleButton >
    {loading && <Progress
      className={classes.progress}
      color={progressColor}
    />}
  </div >
)

ButtonWithProgress.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  progressColor: PropTypes.string,
  buttonColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
}

ButtonWithProgress.defaultProps = {
  progressColor: 'primary',
  buttonColor: 'secondary',
  fullWidth: false,
  className: '',
  disabled: false,
}

export default withStyles(style)(ButtonWithProgress)
