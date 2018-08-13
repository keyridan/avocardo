import React from 'react'
import PropTypes from 'prop-types'
import Star from '@material-ui/icons/Star'
import WbSunny from '@material-ui/icons/WbSunny'
import Switch from '@material-ui/core/Switch'

const ThemeSwitcher = ({ themeType, className, changeThemeTypeState }) => (
  <div className={className} >
    <WbSunny />
    <Switch
      checked={themeType.isDark}
      onChange={changeThemeTypeState}
    />
    <Star />
  </div >
)

ThemeSwitcher.propTypes = {
  themeType: PropTypes.shape({
    isDark: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
  changeThemeTypeState: PropTypes.func.isRequired,
}

export default ThemeSwitcher
