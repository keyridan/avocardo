import { connect } from 'react-redux'
import ImageLoader from '../../components/file/ImageLoader'
import { setFileWithImageUrl, setImageUrl } from '../../actions/index'
import { imageLoaderHeightSelector, imageLoaderWidthSelector, imageUrlSelector } from '../../selectors/index'

const mapStateToProps = state => ({
  imageUrl: imageUrlSelector(state),
  defaultHeight: imageLoaderHeightSelector(state),
  defaultWidth: imageLoaderWidthSelector(state),
})

const mapDispatchToProps = {
  setImageUrl,
  setFileWithImageUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageLoader)
