import React from 'react'
import PropTypes from 'prop-types'
import Brightness3 from '@material-ui/icons/Brightness3'
import WbSunny from '@material-ui/icons/WbSunny'
import Switch from '@material-ui/core/Switch'

const ThemeSwitcher = ({ themeType, className, changeThemeTypeState }) => (
  <div className={className} >
    <span className={`${className}_glyph`} >
      <WbSunny />
    </span >
    <Switch
      checked={themeType.isDark}
      onChange={changeThemeTypeState}
    />
    <span className={`${className}_glyph`} >
      <Brightness3 className={`${className}_night_mode`} />
    </span >
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
