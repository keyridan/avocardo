import { connect } from 'react-redux'
import ImageLoader from '../../components/file/ImageLoader'
import { setFileWithImageUrl, setImageUrl } from '../../actions/index'
import { imagesLoadingSelector, imageUrlSelector } from '../../selectors'

const mapStateToProps = state => ({
  imageUrl: imageUrlSelector(state),
  imagesLoading: imagesLoadingSelector(state),
})

const mapDispatchToProps = {
  setImageUrl,
  setFileWithImageUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageLoader)
