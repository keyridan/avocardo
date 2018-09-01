import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import _ from 'lodash'
import InfoProviderSwitcherContainer from '../../containers/info/InfoProviderSwitcherContainer'
import InfoCard from './InfoCard'
import InfoTable from './InfoTable'
import s from './InfoPanel.css'

const InfoPanel = ({ info, type, checked }) => (
  <div >
    <ExpansionPanel >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={s.info_panel} >
        <Typography className={s.info_panel_title} >{type}</Typography >
        <InfoProviderSwitcherContainer
          type={type}
          checked={checked}
          className={s.info_provider_switcher}
        />
      </ExpansionPanelSummary >
      {console.log('info', info)}
      <ExpansionPanelDetails className={s.info_panel_details} >
        {!_.isEmpty(info) && (
          <InfoCard info={info} />
        )}
        {(!_.isEmpty(info)) && info.table && info.table.rows && (
          <InfoTable rows={info.table.rows} />
        )}
      </ExpansionPanelDetails >
    </ExpansionPanel >
  </div >
)

InfoPanel.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}

InfoPanel.defaultProps = {
  info: {},
}

export default InfoPanel
