import { connect } from 'react-redux'
import CardSpeedDial from '../../components/card/CardSpeedDial'
import {
  imageNotEmptySelector,
  openInputImageSelector,
  openSpeedDialSelector
} from '../../selectors'
import {
  addBackSideValue,
  addOrUpdateBackSideImageValueAndClean,
  changeOpenInputImageState,
  changeSpeedDialState,
  closeAndClean,
  closeSpeedDialState,
  openSpeedDialState,
} from '../../actions'

const mapStateToProps = (state) => {
  let isTouch
  if (typeof document !== 'undefined') {
    isTouch = 'ontouchstart' in document.documentElement
  }
  return {
    open: openSpeedDialSelector(state),
    openInputImage: openInputImageSelector(state),
    isTouch,
    imageNotEmpty: imageNotEmptySelector(state),
  }
}

const mapDispatchToProps = {
  openSpeedDialState,
  closeSpeedDialState,
  changeSpeedDialState,
  addBackSideValue,
  changeOpenInputImageState,
  addOrUpdateBackSideImageValueAndClean,
  closeAndClean,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardSpeedDial)
