import { translate } from '../../translation/index'

const TranslatedText = ({ value, language }) => (
  translate(value, language) || value
)

export default TranslatedText
