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
    [theme.breakpoints && theme.breakpoints.down('sm')]: {
      bottom: 20,
    },
    position: 'fixed',
    right: 15,
    zIndex: 4,
  },
  dialog: {
    paddingLeft: 15,
    paddingRight: 15,
  },
})

const AddImageDialog = ({
  classes, openInputImage, addOrUpdateBackSideImageValueAndClean, closeAndClean, imageNotEmpty,
}) => (
  <div>
    {openInputImage && (
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
          &nbsp;
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
    </Dialog >)}
  </div>
)

AddImageDialog.propTypes = {
  classes: PropTypes.objectOf(styles).isRequired,
  openInputImage: PropTypes.bool.isRequired,
  imageNotEmpty: PropTypes.bool.isRequired,
  addOrUpdateBackSideImageValueAndClean: PropTypes.func.isRequired,
  closeAndClean: PropTypes.func.isRequired,
}

export default withStyles(styles)(AddImageDialog)
