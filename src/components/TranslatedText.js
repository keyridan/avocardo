import { translate } from '../translation'

const TranslatedText = ({ value, language }) => (
  translate(value, language) || value
)

export default TranslatedText
