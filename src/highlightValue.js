import React from 'react'

function notHighlightedPart(startPosition, endPosition) {
  return {
    position: startPosition,
    length: endPosition - startPosition,
    highlighted: false,
  }
}

function highlitedPart(data) {
  return {
    position: data.valuePosition,
    length: data.length,
    highlighted: true,
  }
}

function createSplitHighlightOrNotSections(sum, data) {
  return sum.position < data.valuePosition
    ? [notHighlightedPart(sum.position, data.valuePosition), highlitedPart(data)]
    : [highlitedPart(data)]
}

function dataWithPositionOrWithLastPiece(dataWithPosition, value) {
  return dataWithPosition.position < value.length
    ? [
      ...dataWithPosition.data,
      notHighlightedPart(dataWithPosition.position, value.length),
    ]
    : dataWithPosition.data
}

function valuePartsToHighlight({ highlightData, value }) {
  const dataWithPosition = highlightData.reduce((sum, data) => {
    const sumData = createSplitHighlightOrNotSections(sum, data)
    return {
      position: data.valuePosition + data.length,
      data: [
        ...sum.data,
        ...sumData,
      ],
    }
  }, {
    position: 0,
    data: [],
  })
  return dataWithPositionOrWithLastPiece(dataWithPosition, value)
}

function highlightedValueWithData({ highlightData, value, className }) {
  return valuePartsToHighlight({ highlightData, value })
    .map((valuePart) => {
      const valueSubString = value.substr(valuePart.position, valuePart.length)
      return valuePart.highlighted
        ? (<span className={className} >{valueSubString}</span >)
        : (valueSubString)
    })
}

function highlightWithPosition(highlight, splitedValue) {
  return {
    value: highlight.value,
    wordPartPosition: highlight.wordPart.search(highlight.value),
    wordPosition: splitedValue.search(highlight.wordPart),
  }
}

function sortedHighlightDataWithPositionOfHighlightInValue(highlights, splitedValue) {
  return highlights.map(highlight => highlightWithPosition(highlight, splitedValue))
    .filter(value => value.wordPosition > -1)
    .map(value => ({
      value: value.value,
      length: value.value.length,
      valuePosition: value.wordPosition + value.wordPartPosition,
    }))
    .sort((a, b) => a.wordPosition > b.wordPosition)
}

function highlightedWord(highlights, splitedValue, className) {
  const highlightData = sortedHighlightDataWithPositionOfHighlightInValue(highlights, splitedValue)
  const highlightLength = highlightData.reduce((sum, value) => (sum + value.length), 0)
  return splitedValue.length === highlightLength
    ? (<span className={className} >{splitedValue}</span >)
    : highlightedValueWithData({ highlightData, value: splitedValue, className })
}

function highlightWordPartRegexp(highlights) {
  return highlights
    .map(highlight => highlight.wordPart)
    .join('|')
}

function splitValueBySpacesAndAddNeedHighlightProperty({ highlights, value }) {
  const wordPartsRegexp = highlightWordPartRegexp(highlights)
  return value.split(' ')
    .map(word =>
      (word.match(new RegExp(wordPartsRegexp, 'gm'))
        ? {
          word,
          needHighlight: true,
        } : {
          word,
          needHighlight: false,
        }))
}

function highlightedIfNeedHighlight(splitedValue, highlights, className) {
  return ((splitedValue.needHighlight
    ? highlightedWord(highlights, splitedValue.word, className)
    : splitedValue.word))
}

export function highlightedValue({ highlights, value, className }) {
  const splitedValues = splitValueBySpacesAndAddNeedHighlightProperty({ highlights, value })
  return (
    <span >{
      splitedValues.flatMap((splitedValue) => {
          const finalValue = highlightedIfNeedHighlight(splitedValue, highlights, className)
        return (<span>{finalValue}<span> </span></span>)
        })}
    </span >
  )
}
