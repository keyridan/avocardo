import { connect } from 'react-redux'
import InfoCards from '../../components/info/InfoCards'

const mapStateToProps = state => ({
  infos: state.infos,
  infoProvider: state.infoProvider,
})

export default connect(mapStateToProps)(InfoCards)
