import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import store, { history } from './store/createStore'
import { TranslatePage } from './containers/TranslatePage'
import { saveState } from './store/localStorage'
import ThemeProvider from './containers/ThemeProvider'

const appStore = store

appStore.subscribe(() => {
  saveState(appStore.getState())
})

const App = () => (
  <Provider store={appStore} >
    <Router history={history} >
      <ThemeProvider >
        <CssBaseline >
          <Route
            exact
            path="/"
            component={TranslatePage}
          />
          <Route
            path="/:fromLanguage/:toLanguage/:word"
            component={TranslatePage}
          />
        </CssBaseline >
      </ThemeProvider >
    </Router >
  </Provider >
)

export default hot(module)(App)
