import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'
import LinearProgress from '@material-ui/core/LinearProgress'
import DeckItem from './DeckItem'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'
import s from './DeckList.css'

const DeckList = ({ auth, decks, deck, deckListState, chooseDeck, changeDeckListState, fetchDecks }) => (
  <div className={s.deck_list} >
    <FormControl required >
      <InputLabel htmlFor="deck-simple" >
        <TranslatedTextContainer value="deck_list_helper" />
      </InputLabel >
      <Select
        value={deck}
        open={deckListState}
        disabled={!auth}
        displayEmpty
        onChange={event => chooseDeck(event.target.value)}
        onClose={changeDeckListState}
        onOpen={() => {
          fetchDecks()
          changeDeckListState()
        }}
        renderValue={value => (<DeckItem deck={value} />)}
        input={
          <Input
            name="deck"
            id="deck-simple"
          />}
      >
        {decks.pending && <LinearProgress color="secondary" className={s.decks_progress} />}
        <MenuItem value='' />
        {decks.values.map(deckItem => (
          <MenuItem key={deckItem.id} value={deckItem} >
            <DeckItem deck={deckItem} />
          </MenuItem >
        ))}
      </Select >
      {auth ? (
        <FormHelperText >
          <TranslatedTextContainer value="deck_selector_helper" />
        </FormHelperText >
      ) : (
        <FormHelperText >
          <TranslatedTextContainer value="deck_selector_login_helper" />
        </FormHelperText >
      )}
    </FormControl >
  </div >
)

DeckList.propTypes = {
  auth: PropTypes.bool.isRequired,
  deckListState: PropTypes.bool.isRequired,
  decks: PropTypes.array.isRequired,
  chooseDeck: PropTypes.func.isRequired,
  changeDeckListState: PropTypes.func.isRequired,
  fetchDecks: PropTypes.func.isRequired,
}

export default DeckList
