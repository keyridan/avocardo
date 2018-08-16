import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Progress = ({ loading, className, color }) => (
  <div className={className} >
    {loading &&
    <CircularProgress
      size={24}
      color={color}
      thickness={5}
    />}
  </div >
)

Progress.propTypes = {
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Progress.defaultProps = {
  color: 'secondary',
}

export default Progress
