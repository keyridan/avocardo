import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import SimpleInput from '../common/SimpleInput'
import CheckBoxCardItem from '../../containers/CheckBoxCardItem'
import s from './FlashCard.css'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const FlashCard = ({ frontSide, backSide, setFrontSide, setBackSideValue }) => (
  <div className={s.flash_card} >
    <Card >
      <CardContent >
        <Typography color="textSecondary" >
          <TranslatedTextContainer value="card_front_side_title" />
        </Typography >
        <SimpleInput
          value={frontSide}
          onChange={(event) => {
            setFrontSide(event.target.value)
          }}
        />
      </CardContent >
    </Card >
    <Card >
      <CardContent >
        <Typography color="textSecondary" >
          <TranslatedTextContainer value="card_back_side_title" />
        </Typography >
        {backSide
          .map((backSideItem, index) => (
            <CheckBoxCardItem
              key={index}
              checked={parseInt(backSideItem.checked)}
              index={index}
            >
              <SimpleInput
                key={index}
                value={backSideItem.value}
                onChange={event => setBackSideValue(event.target.value, index)}
              />
            </CheckBoxCardItem >
          ))}
      </CardContent >
    </Card >
  </div >
)

FlashCard.propTypes = {
  frontSide: PropTypes.string.isRequired,
  backSide: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    checked: PropTypes.number,
  })).isRequired,
  setFrontSide: PropTypes.func.isRequired,
  setBackSideValue: PropTypes.func.isRequired,
  reverseCardSides: PropTypes.func.isRequired,
}

export default FlashCard
