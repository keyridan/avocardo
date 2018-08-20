import { connect } from 'react-redux'
import FlashCard from '../../components/card/FlashCard'
import { reverseCardSides, setBackSideValue, setFrontSide, toggleOption, toggleAllOptions } from '../../actions/index'

const mapStateToProps = state => ({
  ...state.flashCard,
})

const mapDispatchToProps = ({
  setFrontSide,
  setBackSideValue,
  reverseCardSides,
  toggleOption,
  toggleAllOptions,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
