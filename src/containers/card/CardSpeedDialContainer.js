import { connect } from 'react-redux'
import CardSpeedDial from '../../components/card/CardSpeedDial'
import { hiddenSpeedDialSelector, openInputImageSelector, openSpeedDialSelector } from '../../selectors'
import {
  addBackSideImageValueAndClean,
  addBackSideValue,
  changeOpenInputImageState,
  changeSpeedDialState, closeAndClean,
  closeSpeedDialState,
  openSpeedDialState,
} from '../../actions'

const mapStateToProps = (state) => {
  let isTouch
  if (typeof document !== 'undefined') {
    isTouch = 'ontouchstart' in document.documentElement
  }
  console.log('doc: ', document)
  return {
    open: openSpeedDialSelector(state),
    hidden: hiddenSpeedDialSelector(state),
    openInputImage: openInputImageSelector(state),
    isTouch,
  }
}

const mapDispatchToProps = {
  openSpeedDialState,
  closeSpeedDialState,
  changeSpeedDialState,
  addBackSideValue,
  changeOpenInputImageState,
  addBackSideImageValueAndClean,
  closeAndClean,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardSpeedDial)
