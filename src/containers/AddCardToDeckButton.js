import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import Progress from '../components/Progress'
import { addCardToDeck } from '../actions'

const AddCardToDeckButton = ({ className, addCardToDeckPending, addCardToDeck }) => (
  <div className={`${className}_container`} >
    <SimpleButton
      className={className}
      onClick={addCardToDeck}
    >
      {addCardToDeckPending ? '' : 'add_card_to_deck'}
    </SimpleButton >
    <Progress
      loading={addCardToDeckPending}
      className={`${className}_progress`}
      color="primary"
    />
  </div >
)

AddCardToDeckButton.propTypes = {
  addCardToDeck: PropTypes.func.isRequired,
  addCardToDeckPending: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
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
