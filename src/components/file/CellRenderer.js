import React from 'react'
import CellMeasurer from 'react-virtualized/dist/es/CellMeasurer'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({})

const CellRenderer = ({ index, key, parent, style, photos, columnWidth, cache, selectPhoto }) => {
  const photo = photos[index % photos.length]
  console.log('photo: ', photo)
  return (
    <CellMeasurer cache={cache} index={index} key={key} parent={parent} >
      <div
        className="cell"
        style={{
          ...style,
          width: columnWidth,
        }}
      >
        <div
          style={{
            borderRadius: "0.5rem",
            height: 800,
            marginBottom: "0.5rem",
            width: "100%",
            fontSize: 20,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img src={photo.src} onClick={() => selectPhoto(index)} />
        </div >
      </div >
    </CellMeasurer >
  )
}

CellRenderer.propTypes = {}

export default withStyles(styles)(CellRenderer)
