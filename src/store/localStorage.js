function getSerializedState() {
  return localStorage.getItem('state')
}

export const loadState = () => {
  try {
    const serializedState = getSerializedState()
    return serializedState ? JSON.parse(serializedState) : undefined
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
    }
    const serializedState = JSON.stringify(stateToSave)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // Ignore write errors.
  }
}
