import { connect } from 'react-redux'
import FlashCard from '../../components/card/FlashCard'
import {
  removeBackSideItem,
  reverseCardSides,
  setBackSideValue,
  setFrontSideValue,
  toggleAllOptions,
  toggleOption,
} from '../../actions'

const mapStateToProps = state => ({
  ...state.flashCard,
})

const mapDispatchToProps = ({
  setFrontSideValue,
  setBackSideValue,
  reverseCardSides,
  toggleOption,
  toggleAllOptions,
  removeBackSideItem,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
