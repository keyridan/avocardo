import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const SimpleInput = ({
  value, className, onChange, onKeyPress, onEnterKey,
}) => (
  <TextField
    multiline
    className={className}
    onChange={onChange || console.log('onChange')}
    onKeyPress={onKeyPress || ((event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        onEnterKey ? onEnterKey(event.target.value) : console.log('onKeyPress')
      }
    })
    }
    value={value}
  />
)

SimpleInput.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onEnterKey: PropTypes.func,
}

export default SimpleInput
