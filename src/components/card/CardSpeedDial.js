import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternateOutlined'
import AddAPhoto from '@material-ui/icons/AddAPhotoOutlined'
import NoteAdd from '@material-ui/icons/NoteAddOutlined'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Check from '@material-ui/icons/Check'
import ImageCropperContainer from '../../containers/ImageCropperContainer'

const styles = theme => ({
  root: {
    marginTop: '-350%',
  },
  speedDial: {
    // position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  dialogButtons: {
    position: 'fixed',
    right: 25,
    zIndex: 4,
    backgroundColor: 'RGBA(255,255,255,0.7)',
  },
  dialog: {
    paddingLeft: 0,
    paddingRight: 0,
  },
})

const CardSpeedDial = ({
                         classes, open, isTouch, hidden, openSpeedDialState, closeSpeedDialState, changeSpeedDialState, addBackSideValue, openInputImage, changeOpenInputImageState, addBackSideImageValueAndClean, closeAndClean,
                       }) => (
  <div className={classes.root} >
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onBlur={closeSpeedDialState}
      onClick={addBackSideValue}
      onClose={openSpeedDialState}
      onFocus={isTouch ? undefined : openSpeedDialState}
      onMouseEnter={isTouch ? undefined : openSpeedDialState}
      onMouseLeave={closeSpeedDialState}
      open={open}
    >
      <SpeedDialAction
        icon={(<NoteAdd />)}
        tooltipTitle="Note"
        onClick={addBackSideValue}
      />
      <SpeedDialAction
        icon={(<AddPhotoAlternate />)}
        tooltipTitle="Photo1"
        onClick={changeSpeedDialState}
      />
      <SpeedDialAction
        icon={(<AddAPhoto />)}
        tooltipTitle="Photo2"
        onClick={changeOpenInputImageState}
      />
    </SpeedDial >
    <Dialog
      fullScreen
      aria-labelledby="simple-dialog-title"
      open={openInputImage}
      onClose={addBackSideImageValueAndClean}
    >
      <DialogContent className={classes.dialog} >
        <div className={classes.dialogButtons} >
          <IconButton
            color="inherit"
            onClick={closeAndClean}
            aria-label="Close"
          >
            <Close />
          </IconButton >
          <IconButton
            color="inherit"
            onClick={addBackSideImageValueAndClean}
            aria-label="OK"
          >
            <Check />
          </IconButton >
        </div >
        <ImageCropperContainer />
      </DialogContent >
    </Dialog >
  </div >
)

CardSpeedDial.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  openInputImage: PropTypes.bool.isRequired,
  closeSpeedDialState: PropTypes.func.isRequired,
  openSpeedDialState: PropTypes.func.isRequired,
  changeSpeedDialState: PropTypes.func.isRequired,
  addBackSideValue: PropTypes.func.isRequired,
  changeOpenInputImageState: PropTypes.func.isRequired,
  addBackSideImageValueAndClean: PropTypes.func.isRequired,
  closeAndClean: PropTypes.func.isRequired,
}

export default withStyles(styles)(CardSpeedDial)
