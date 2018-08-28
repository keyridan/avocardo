import { createSelector } from 'reselect'

export const openSpeedDialSelector = state => state.cardSpeedDialState.open
export const openInputImageSelector = state => state.cardSpeedDialState.openInputImage
export const imageSrcSelector = state => state.image.imageSrc
export const imageUrlSelector = state => state.image.imageUrl

export const imageSelectorDialogStateSelector = state => state.images.imageSelectorDialogState
export const photosSelector = state => state.images.photos
export const requestedImagesSelector = state => state.images.requestedImages
export const photosFromRequestedImagesSelector = createSelector(
  requestedImagesSelector,
  images => images.map(image => ({
    src: image.webformatURL,
    width: image.webformatWidth,
    height: image.webformatHeight,
  })),
)
export const imagesPerPageSelector = state => state.images.perPage
export const totalImagesSelector = state => state.images.total
export const pageImagesSelector = state => state.images.page
export const hasNextPageImagesSelector = createSelector(
  totalImagesSelector,
  imagesPerPageSelector,
  pageImagesSelector,
  (total, perPage, pageNumber) => (
    !!total && (Math.floor(total / 0) + 1) > pageNumber
  ),
)
export const nextPageLoadingSelector = state => state.images.nextPageLoading

export const imageSelector = state => state.image
export const cropSelector = state => state.image.crop
export const zoomSelector = state => state.image.zoom
export const aspectSelector = state => state.image.aspect
export const croppedImageSelector = state => state.image.croppedImage
export const imageNotEmptySelector = state => !!state.image.croppedImage

export const backSideSelector = state => state.flashCard.backSide

