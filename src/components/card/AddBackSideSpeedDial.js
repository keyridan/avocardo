import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternateOutlined'
import NoteAdd from '@material-ui/icons/NoteAddOutlined'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'
import AddImageDialogContainer from '../../containers/file/AddImageDialogContainer'

const styles = theme => ({
  root: {
    position: 'relative',
  },
  speedDial: {
    position: 'absolute',
    bottom: '-17px',
    right: '-25px',
  },
  dialogButtons: {
    [theme.breakpoints.down('sm')]: {
      bottom: 20,
    },
    position: 'fixed',
    right: 25,
    zIndex: 4,
  },
  dialog: {
    paddingLeft: 0,
    paddingRight: 0,
  },
})

const AddBackSideSpeedDial = ({ classes, open, isTouch, openSpeedDial, closeSpeedDial, changeSpeedDialState, addBackSideValue, changeOpenInputImageState }) => (
  <div className={classes.root} >
    <div className={classes.speedDial} >
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        onBlur={closeSpeedDial}
        onClick={changeSpeedDialState}
        onClose={closeSpeedDial}
        onFocus={isTouch ? undefined : openSpeedDial}
        onMouseEnter={isTouch ? undefined : openSpeedDial}
        onMouseLeave={closeSpeedDial}
        open={open}
      >
        <SpeedDialAction
          icon={(<NoteAdd />)}
          tooltipTitle={(<TranslatedTextContainer value="add_note" />)}
          onClick={addBackSideValue}
        />
        <SpeedDialAction
          icon={(<AddPhotoAlternate />)}
          tooltipTitle={(<TranslatedTextContainer value="add_image" />)}
          onClick={changeOpenInputImageState}
        />
      </SpeedDial >
    </div >
    <AddImageDialogContainer />
  </div >
)

AddBackSideSpeedDial.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  closeSpeedDialState: PropTypes.func.isRequired,
  openSpeedDialState: PropTypes.func.isRequired,
  changeSpeedDialState: PropTypes.func.isRequired,
  addBackSideValue: PropTypes.func.isRequired,
  changeOpenInputImageState: PropTypes.func.isRequired,
}

export default withStyles(styles)(AddBackSideSpeedDial)
