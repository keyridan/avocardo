import { connect } from 'react-redux'
import CardSpeedDial from '../../components/card/CardSpeedDial'
import { openSpeedDialSelector } from '../../selectors'
import {
  addBackSideValue,
  changeOpenInputImageState,
  changeSpeedDialState,
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
    isTouch,
  }
}

const mapDispatchToProps = {
  openSpeedDialState,
  closeSpeedDialState,
  changeSpeedDialState,
  addBackSideValue,
  changeOpenInputImageState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardSpeedDial)
