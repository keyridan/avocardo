import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import ButtonWithProgress from '../components/ButtonWithProgress'
import { addCardToDeck } from '../actions'

const styles = () => ({
  button: {
    gridTemplate: '1fr/ 1fr 1fr 1fr',
  },
})

const AddCardToDeckButton = ({ className, addCardToDeckPending, addCardToDeck, classes }) => (
  <ButtonWithProgress
    className={`${className} ${classes.button}`}
    loading={addCardToDeckPending}
    onClick={addCardToDeck}
  >
    add_card_to_deck
  </ButtonWithProgress >
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
)(withStyles(styles)(AddCardToDeckButton))
