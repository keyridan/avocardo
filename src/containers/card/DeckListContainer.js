import { connect } from 'react-redux'
import DeckList from '../../components/card/DeckList'
import { fetchDecks, changeDeckListState, chooseDeck } from '../../actions/index'

const mapStateToProps = state => ({
  auth: state.tinyCardsLogin.auth,
  deckListState: state.deckListState,
  decks: state.decks,
  deck: state.deck,
})

const mapDispatchToProps = {
  chooseDeck,
  changeDeckListState,
  fetchDecks,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckList)
