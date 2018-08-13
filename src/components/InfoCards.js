import React from 'react'
import PropTypes from 'prop-types'
import InfoPanel from './InfoPanel'
import { INFO_PROVIDERS } from '../constants'

const InfoCards = ({ infos, className, infoProvider }) => (
  <div className={className} >
    {INFO_PROVIDERS.map((provider, index) =>
      (<InfoPanel
          info={infos[provider]}
          type={provider}
          key={index}
          checked={infoProvider[provider].checked}
        />
      ))}
  </div >
)

InfoCards.propTypes = {
  className: PropTypes.string.isRequired,
}

export default InfoCards
