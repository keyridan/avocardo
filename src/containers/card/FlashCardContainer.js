import { connect } from 'react-redux'
import FlashCard from '../../components/card/FlashCard'
import { reverseCardSides, setBackSideValue, setFrontSide } from '../../actions/index'

const mapStateToProps = state => ({
  ...state.flashCard,
})

const mapDispatchToProps = ({
  setFrontSide,
  setBackSideValue,
  reverseCardSides,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
