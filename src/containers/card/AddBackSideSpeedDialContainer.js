import { connect } from 'react-redux'
import AddBackSideSpeedDial from '../../components/card/AddBackSideSpeedDial'
import { openSpeedDialSelector } from '../../selectors'
import {
  addBackSideValue,
  changeOpenInputImageState,
  changeSpeedDialState,
  closeSpeedDial,
  openSpeedDial,
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
  openSpeedDial,
  closeSpeedDial,
  changeSpeedDialState,
  addBackSideValue,
  changeOpenInputImageState,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBackSideSpeedDial)
