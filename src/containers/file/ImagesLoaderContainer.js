import { connect } from 'react-redux'
import ImagesLoader from '../../components/file/ImagesLoader'
import { hasNextPageImagesSelector, imageUrlSelector, photosSelector, } from '../../selectors'
import { loadNextPageImages } from '../../actions'

const mapStateToProps = state => ({
  hasNextPage: hasNextPageImagesSelector(state),
  imageUrl: imageUrlSelector(state),
  photos: photosSelector(state),
})

const mapDispatchToProps = {
  loadNextPageImages,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesLoader)
