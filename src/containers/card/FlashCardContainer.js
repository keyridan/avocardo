import { connect } from 'react-redux'
import FlashCard from '../../components/card/FlashCard'
import { reverseCardSides, setBackSideValue, setFrontSideValue, toggleOption, toggleAllOptions } from '../../actions/index'

const mapStateToProps = state => ({
  ...state.flashCard,
})

const mapDispatchToProps = ({
  setFrontSideValue,
  setBackSideValue,
  reverseCardSides,
  toggleOption,
  toggleAllOptions,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
