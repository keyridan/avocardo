import { connect } from 'react-redux'
import ImagesLoader from '../../components/file/ImagesLoader'
import { hasNextPageImagesSelector, imageUrlSelector, nextPageLoadingSelector, photosSelector, } from '../../selectors'
import { loadNextPageImages } from '../../actions'

const mapStateToProps = state => ({
  hasNextPage: hasNextPageImagesSelector(state),
  isNextPageLoading: nextPageLoadingSelector(state),
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
