import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import { addCardToDeck } from '../actions'

const AddCardToDeckButton = ({ addCardToDeckPending, addCardToDeck }) => (
  <div >
    <SimpleButton
      onClick={addCardToDeck}
    >
      {addCardToDeckPending ? 'pending_add_card_to_deck' : 'add_card_to_deck'}
    </SimpleButton >
  </div >
)

AddCardToDeckButton.propTypes = {
  addCardToDeck: PropTypes.func.isRequired,
  addCardToDeckPending: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  addCardToDeckPending: state.addCardToDeckPending,
})

const mapDispatchToProps = {
  addCardToDeck,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCardToDeckButton)
