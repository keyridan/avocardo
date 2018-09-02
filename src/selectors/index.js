export * from './images'
export * from './message'

export const fromLanguageSelector = state => state.fromLanguage
export const toLanguageSelector = state => state.toLanguage

export const openSpeedDialSelector = state => state.addBackSideSpeedDialState.open
export const openInputImageSelector = state => state.addBackSideSpeedDialState.openInputImage

export const imagesLoadingSelector = state => state.image.imagesLoading
export const imageSrcSelector = state => state.image.imageSrc
export const imageUrlSelector = state => state.image.imageUrl
export const imageSelector = state => state.image
export const cropSelector = state => state.image.crop
export const zoomSelector = state => state.image.zoom
export const aspectSelector = state => state.image.aspect
export const croppedImageSelector = state => state.image.croppedImage
export const imageNotEmptySelector = state => !!state.image.croppedImage

export const backSideSelector = state => state.flashCard.backSide

