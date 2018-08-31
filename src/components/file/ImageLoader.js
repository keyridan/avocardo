import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/es/FormHelperText/FormHelperText'
import SimpleInput from '../common/SimpleInput'
import ButtonWithProgress from '../common/ButtonWithProgress'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'
import ImageSelectorDialogContainer from '../../containers/file/ImageSelectorDialogContainer'

const ImageLoader = ({
  imageUrl, imagesLoading, setImageUrl, setFileWithImageUrl,
}) => (
  <Grid container >
    <Grid item xs={9}>
      <SimpleInput
        fullWidth
        label={(<TranslatedTextContainer value="image_url_input_label" />)}
        value={imageUrl}
        onChange={event => setImageUrl(event.target.value)}
        onEnterKey={setFileWithImageUrl}
      />
      <FormHelperText >
        <TranslatedTextContainer value="enter_text_helper" />
      </FormHelperText >
    </Grid >
    <Grid item xs={3} sm={1}>
      <ButtonWithProgress
        loading={imagesLoading}
        onClick={setFileWithImageUrl}
      >
        Go
      </ButtonWithProgress >
    </Grid >
    <ImageSelectorDialogContainer />
  </Grid >
)

ImageLoader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imagesLoading: PropTypes.bool.isRequired,
  setImageUrl: PropTypes.func.isRequired,
  setFileWithImageUrl: PropTypes.func.isRequired,
}

export default ImageLoader
