import { connect } from 'react-redux'
import MessageSnackbar from '../components/MessageSnackbar'
import { closeMessage } from '../actions'
import {
  messageOpenStateSelector,
  messageTextSelector,
  messageTranslatedTextSelector,
  messageTypeSelector,
} from '../selectors'

const mapStateToProps = state => ({
  text: messageTextSelector(state),
  translatedText: messageTranslatedTextSelector(state),
  type: messageTypeSelector(state),
  open: messageOpenStateSelector(state),
})

const mapDispatchToProps = {
  closeMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSnackbar)
