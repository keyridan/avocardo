export const openSpeedDialSelector = state => state.cardSpeedDialState.open
export const openInputImageSelector = state => state.cardSpeedDialState.openInputImage
export const imageSrcSelector = state => state.image.imageSrc
export const imageUrlSelector = state => state.image.imageUrl
export const imageSelectorDialogStateSelector = state => state.image.imageSelectorDialogState
export const photosSelector = state => state.image.photos
export const requestedImagesSelector = state => state.image.requestedImages
export const imageSelector = state => state.image
export const cropSelector = state => state.image.crop
export const zoomSelector = state => state.image.zoom
export const aspectSelector = state => state.image.aspect
export const croppedImageSelector = state => state.image.croppedImage
export const imageNotEmptySelector = state => !!state.image.croppedImage

export const backSideSelector = state => state.flashCard.backSide

