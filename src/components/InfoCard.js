import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography/'
import s from './InfoCard.css'

const InfoCard = ({ info }) => (
  <div className={s.infoCard} >
    {info && (info.title || info.description) && (
      <Card >
        <CardContent >
          <Typography color="textSecondary" >
            {info.title}
          </Typography >
          <Typography >
            {info.description}
          </Typography >
        </CardContent >
      </Card >
    )}
  </div >
)

InfoCard.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    form: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }),
}

export default InfoCard
