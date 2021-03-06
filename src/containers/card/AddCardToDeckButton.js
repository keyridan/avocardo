import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonWithProgress from '../../components/common/ButtonWithProgress'
import { addCardToDeck } from '../../actions/index'

const AddCardToDeckButton = ({ disabled, addCardToDeckPending, addCardToDeck }) => (
  <ButtonWithProgress
    disabled={disabled}
    loading={addCardToDeckPending}
    onClick={addCardToDeck}
  >
    add_card_to_deck
  </ButtonWithProgress >
)

AddCardToDeckButton.propTypes = {
  addCardToDeck: PropTypes.func.isRequired,
  addCardToDeckPending: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  addCardToDeckPending: state.addCardToDeckPending,
  disabled: !state.tinyCardsLogin.auth,
})

const mapDispatchToProps = {
  addCardToDeck,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCardToDeckButton)
