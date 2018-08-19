import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import SimpleButton from '../components/SimpleButton'
import Progress from '../components/Progress'

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

const AddCardToDeckButton = ({ className, loading, onClick, classes, progressColor, buttonColor, children, fullWidth }) => (
  <div className={`${className} ${classes.container}`} >
    <SimpleButton
      active={loading}
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

AddCardToDeckButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string,
  progressColor: PropTypes.string,
  buttonColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
}

AddCardToDeckButton.defaultProps = {
  progressColor: 'primary',
  buttonColor: 'secondary',
  fullWidth: false,
}

export default withStyles(style)(AddCardToDeckButton)
