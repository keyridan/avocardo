import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const SimpleButton = ({
  className, active, children, onClick, color, variant, value, size, type, fullWidth,
}) => (
  <Button
    fullWidth={!!fullWidth}
    type={type}
    className={className}
    onClick={onClick}
    disabled={active}
    variant={variant}
    color={color}
    value={value}
    size={size}
  >
    <TranslatedTextContainer value={children} />
  </Button >
)

SimpleButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
}

SimpleButton.defaultProps = {
  color: 'secondary',
  variant: 'raised',
  active: false,
  size: 'medium',
  value: '',
}

export default SimpleButton
