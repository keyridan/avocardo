import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'

const ThemeProvider = ({ children, themeType }) => {
  const newTheme = createMuiTheme({
    ...theme,
    palette: {
      ...theme.palette,
      type: themeType.value,
      background: {
        paper: themeType.isDark ? '#063649' : '#fff',
        default: themeType.isDark ? '#061f2f' : '#fff',
      },
    },
  })
  return (
    <MuiThemeProvider theme={newTheme} >
      {children}
    </MuiThemeProvider >
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  themeType: PropTypes.shape({
    isDark: PropTypes.bool,
  }),
}

ThemeProvider.defaultProps = {
  themeType: {
    isDark: false,
  },
}

const mapStateToProps = state => ({
  themeType: state.themeType,
})

export default withRouter(connect(mapStateToProps)(ThemeProvider))
