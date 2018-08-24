import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import Close from '@material-ui/icons/Close'
import Check from '@material-ui/icons/Check'
import ImageCropperContainer from '../../containers/file/ImageCropperContainer'

const styles = theme => ({
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

const FileDialog = ({ classes, openInputImage, addOrUpdateBackSideImageValueAndClean, closeAndClean, imageNotEmpty }) => (
  <Dialog
    fullScreen
    aria-labelledby="simple-dialog-title"
    open={openInputImage}
  >
    <DialogContent className={classes.dialog} >
      <div className={classes.dialogButtons} >
        <Button
          variant="fab"
          color="primary"
          onClick={closeAndClean}
          aria-label="Close"
        >
          <Close />
        </Button >
        <Button
          variant="fab"
          color="primary"
          disabled={!imageNotEmpty}
          onClick={addOrUpdateBackSideImageValueAndClean}
          aria-label="OK"
        >
          <Check />
        </Button >
      </div >
      <ImageCropperContainer />
    </DialogContent >
  </Dialog >
)

FileDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  openInputImage: PropTypes.bool.isRequired,
  imageNotEmpty: PropTypes.bool.isRequired,
  addBackSideValue: PropTypes.func.isRequired,
  changeOpenInputImageState: PropTypes.func.isRequired,
  addOrUpdateBackSideImageValueAndClean: PropTypes.func.isRequired,
  closeAndClean: PropTypes.func.isRequired,
}

export default withStyles(styles)(FileDialog)
