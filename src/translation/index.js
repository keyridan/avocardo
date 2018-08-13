import { DEFAULT_LOCALISATION_LANGUAGE, SUPPORTED_LOCALISATION_LANGUAGES, TRANSLATE_LANGUAGES } from '../constants'

const isSupported = language => (
  SUPPORTED_LOCALISATION_LANGUAGES.indexOf(language) !== -1
)

const translateValue = (value, language) => (
  require('./' + language + '/strings.json')[value]
)

const translateOrDefault = (text, language, defaultLanguage) => (
  translateValue(text, language) || translateValue(text, defaultLanguage)
)

export const translate = (text, language) => (
  (language && isSupported(language))
    ? translateOrDefault(text, language, DEFAULT_LOCALISATION_LANGUAGE)
    : translateValue(text, DEFAULT_LOCALISATION_LANGUAGE)
)

export const stringKey = languageCode => TRANSLATE_LANGUAGES[languageCode]
