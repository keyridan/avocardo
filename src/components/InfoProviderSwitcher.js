import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'

const InfoProviderSwitcher = ({
  type, checked, changeSwitcherState, className,
}) => (
  <div className={className} >
    <FormGroup row >
      <FormControlLabel
        onClick={event => event.stopPropagation()}
        control={
          <Switch
            checked={checked}
            onChange={() => changeSwitcherState(type)}
          />
        }
        label={<TranslatedTextContainer value="info_provider_switcher" />}
      />
    </FormGroup >
  </div >
)

InfoProviderSwitcher.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  changeSwitcherState: PropTypes.func.isRequired,
}

export default InfoProviderSwitcher
