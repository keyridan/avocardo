import { connect } from 'react-redux'
import FlashCard from '../../components/card/FlashCard'
import {
  removeBackSideItem,
  reverseCardSides,
  setBackSideValue,
  setFrontSideValue,
  toggleAllOptions,
  toggleOption,
  openImageToCrop,
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
  openImageToCrop,
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashCard)
