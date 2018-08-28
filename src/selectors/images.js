import { createSelector } from 'reselect'

export const imagesLoadingSelector = state => state.images.imagesLoading
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
    !!total && (Math.floor(total / perPage) + 1) > pageNumber
  ),
)
export const nextPageLoadingSelector = state => state.images.nextPageLoading
