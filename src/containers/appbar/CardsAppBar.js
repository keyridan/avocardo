import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import AppBarLogin from '../../components/appbar/AppBarLogin'
import TranslatedTextContainer from '../TranslatedTextContainer'
import ThemeSwitcherContainer from './ThemeSwitcherContainer'
import { stringKey } from '../../translation/index'
import s from './CardsAppBar.css'
import { changeChooseLanguageState, changeLoginFormState, chooseLanguage } from '../../actions/index'
import { SUPPORTED_LOCALISATION_LANGUAGES } from '../../constants'
import AppBarUser from '../../components/appbar/AppBarUser'

const CardsAppBar = ({
  auth, language, classes, changeChooseLanguageState, chooseLanguage, chooseLanguageState,
}) => (
  <div className={s.cards_app_bar} >
    <AppBar position="static" >
      <Toolbar >
        {auth ? (<AppBarUser />) : (<AppBarLogin />)}
        <IconButton
          aria-owns="menu-appbar"
          aria-haspopup="true"
          onClick={event => changeChooseLanguageState(event.currentTarget)}
          color="inherit"
        >
          <span style={{ paddingBottom: '5px' }}>{language}</span >
        </IconButton >
        <Menu
          id="lnaguage-menu-appbar"
          anchorEl={chooseLanguageState.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={chooseLanguageState.open}
          onClose={() => changeChooseLanguageState(null)}
        >
          {SUPPORTED_LOCALISATION_LANGUAGES.map(menuLanguage => (
            <MenuItem onClick={() => {
              chooseLanguage(menuLanguage)
              changeChooseLanguageState()
            }}
            >
              <TranslatedTextContainer value={stringKey(menuLanguage.toUpperCase())} />
            </MenuItem >
          ))}
        </Menu >
        <ThemeSwitcherContainer className={s.theme_switcher} />
      </Toolbar >
    </AppBar >
  </div >
)

CardsAppBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  chooseLanguageState: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  auth: state.tinyCardsLogin.auth,
  language: state.language,
  chooseLanguageState: state.chooseLanguageState,
})

const mapDispatchToProps = {
  changeLoginFormState,
  changeChooseLanguageState,
  chooseLanguage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsAppBar)

