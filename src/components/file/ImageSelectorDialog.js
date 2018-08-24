import React from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

const styles = theme => ({
  dialog: {
  },
})

const ImageSelectorDialog = ({ classes, imageSelectorDialogState, photos, selectPhoto, changeImageSelectorDialogState }) => (
  <Dialog
    aria-labelledby="image-selector-dialog-title"
    open={imageSelectorDialogState}
    onClose={changeImageSelectorDialogState}
  >
    <DialogContent className={classes.dialog} >
      <Gallery
        photos={photos}
        onClick={(event, obj) => selectPhoto(obj)}
      />
    </DialogContent >
  </Dialog >
)

ImageSelectorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  imageSelectorDialogState: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  selectPhoto: PropTypes.func.isRequired,
  changeImageSelectorDialogState: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImageSelectorDialog)
