import { connect } from 'react-redux'
import FlashCard from '../components/FlashCard'
import { reverseCardSides, setBackSideValue, setFrontSide } from '../actions'

const mapStateToProps = state => ({
  ...state.flashCard,
})

const mapDispatchToProps = ({
  setFrontSide,
  setBackSideValue,
  reverseCardSides,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
