import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import FormHelperText from '@material-ui/core/es/FormHelperText/FormHelperText'
import SimpleInput from '../common/SimpleInput'
import SimpleButton from '../common/SimpleButton'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const styles = () => ({
  imageUrlContainer: {
    display: 'flex',
  },
})

const ImageLoader = ({ classes, imageUrl, setImageUrl, setFileWithImageUrl }) => (
  <Grid container >
    <Grid item xs={10}>
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
    <Grid item xs={2}>
      <SimpleButton
        onClick={setFileWithImageUrl}
      >
        Go
      </SimpleButton >
    </Grid >
  </Grid >
)

ImageLoader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  setImageUrl: PropTypes.func.isRequired,
  setFileWithImageUrl: PropTypes.func.isRequired,
}

export default withStyles(styles)(ImageLoader)
