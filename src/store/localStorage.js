import { STORE_VERSION, UPDATE_STATE_FOR } from "../constants";

function getSerializedState() {
  return localStorage.getItem('state')
}

const storedState = state => (
  state && (!state.version || state.version.value < STORE_VERSION) && UPDATE_STATE_FOR.length > 0
    ? {
      ...state,
      ...UPDATE_STATE_FOR.reduce((obj, value) => ({
        ...obj,
        ...value,
      }), {}),
    }
    : state
)

export const loadState = () => {
  try {
    const serializedState = getSerializedState()
    return serializedState ? storedState(JSON.parse(serializedState)) : undefined
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const stateToSave = {
      token: state.token,
      tinyCardsLogin: {
        identifier: state.tinyCardsLogin.identifier,
        auth: state.tinyCardsLogin.auth,
      },
      decks: state.decks,
      deck: state.deck,
      recentFromLanguages: state.recentFromLanguages,
      recentToLanguages: state.recentToLanguages,
      fromLanguage: state.fromLanguage,
      toLanguage: state.toLanguage,
      language: state.language,
      infoProvider: state.infoProvider,
      version: state.version,
    }
    const serializedState = JSON.stringify(stateToSave)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // Ignore write errors.
  }
}
