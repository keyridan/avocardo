export async function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */
export async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height,
  )

  return canvas.toDataURL('image/jpeg')
}

export function getImage(url, cb) {
  const canvas = document.createElement('canvas')
  const img = document.createElement('img')
  console.log('url: ', url)

  img.onload = () => {
    const ctx = canvas.getContext('2d')
    // match size of image
    canvas.width = img.width
    canvas.height = img.height
    // Copy the image contents to the canvas
    ctx.drawImage(img, 0, 0)

    // Get the data-URI formatted image
    cb(null, canvas.toDataURL('image/png'))
  }

  img.onerror = (error) => {
    console.log('onError: ', error)
    cb(new Error(error))
  }

  // canvas is not supported
  if (!canvas.getContext) {
    setTimeout(cb, 0, new Error('CanvasIsNotSupported'))
  } else {
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
  }
}
