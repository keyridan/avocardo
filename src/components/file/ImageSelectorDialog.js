import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import ImagesLoaderContainer from '../../containers/file/ImagesLoaderContainer'

const styles = () => ({
  dialog: {},
})

const ImageSelectorDialog = ({ classes, imageSelectorDialogState, photos, selectPhoto, changeImageSelectorDialogState }) => (
  <Dialog
    aria-labelledby="image-selector-dialog-title"
    open={imageSelectorDialogState}
    onClose={changeImageSelectorDialogState}
  >
    <DialogContent className={classes.dialog} >
      <ImagesLoaderContainer />
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
