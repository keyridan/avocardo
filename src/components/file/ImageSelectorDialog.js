import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import ImagesLoaderContainer from '../../containers/file/ImagesLoaderContainer'

const styles = () => ({
  rootDialog: {
  },
  dialog: {
  },
})

const ImageSelectorDialog = ({ classes, imageSelectorDialogState, closeImageSelectorDialog }) => (
  <div className={classes.rootDialog} >
    <Dialog
      fullScreen
      aria-labelledby="image-selector-dialog-title"
      open={imageSelectorDialogState}
      onClose={closeImageSelectorDialog}
    >
      <DialogContent >
        <ImagesLoaderContainer className={classes.dialog} />
      </DialogContent >
    </Dialog >
  </div >
)

ImageSelectorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  imageSelectorDialogState: PropTypes.bool.isRequired,
  closeImageSelectorDialog: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImageSelectorDialog)
