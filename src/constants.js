export const TRANSLATE_BEGIN = 'TRANSLATE_BEGIN'
export const TRANSLATE_SUCCESS = 'TRANSLATE_SUCCESS'
export const TRANSLATE_FAILURE = 'TRANSLATE_FAILURE'
export const TRANSLATE_FAILURE_TEXT = 'translate_failure'
export const DEFAULT_FROM_LANGUAGE = 'EN'
export const DEFAULT_TO_LANGUAGE = 'DE'

const HEROKU_URL = 'https://cardsbuddy.herokuapp.com/api/'
const LOCAL_URL = 'http://localhost:8080/api/'
export const API_URL = HEROKU_URL
export const TRANSLATE_URL = `${API_URL}translate/`
export const IMAGE_URL = `${API_URL}image/?query=`
export const LOGIN_URL = `${API_URL}auth/login`
export const FETCH_DECKS_URL = `${API_URL}v1/me/decks`
export const ADD_CARD_TO_DECK_URL = `${API_URL}v1/me/cards/add/?deckId=`
export const FACT_TYPE = {
  IMAGE: 'IMAGE',
  TEXT: 'TEXT',
}
export const CHOOSE_TO_LANGUAGE = 'CHOOSE_TO_LANGUAGE'
export const SET_WORD = 'SET_WORD'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_IDENTIFIER = 'SET_IDENTIFIER'
export const CHOOSE_FROM_LANGUAGE = 'CHOOSE_FROM_LANGUAGE'
export const SET_TRANSLATION_RESULT = 'SET_TRANSLATION_RESULT'
export const LOGOUT = 'LOGOUT'
export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_FAILURE_MESSAGE = 'login_failure_message'
export const CHANGE_OPEN_LOGIN_FORM = 'CHANGE_OPEN_LOGIN_FORM'
export const CHANGE_OPEN_USER_FORM = 'CHANGE_OPEN_USER_FORM'
export const CHANGE_SHOW_PASSWORD = 'CHANGE_SHOW_PASSWORD'
export const FETCH_DECKS_BEGIN = 'FETCH_DECKS_BEGIN'
export const FETCH_DECKS_SUCCESS = 'FETCH_DECKS_SUCCESS'
export const FETCH_DECKS_FAILURE = 'FETCH_DECKS_FAILURE'
export const FETCH_DECKS_FAILURE_MESSAGE = 'images_request_failure_message'
export const FETCH_DECKS_UNAUTHORIZED_MESSAGE = 'fetch_decks_unauthorized_message'
export const TOGGLE_OPTION = 'TOGGLE_OPTION'
export const TOGGLE_OPTION_ERROR = 'TOGGLE_OPTION_ERROR'
export const CHOOSE_DECK = 'CHOOSE_DECK'
export const CHANGE_DECK_LIST_STATE = 'CHANGE_DECK_LIST_STATE'
export const ADD_CARD_TO_DECK_BEGIN = 'ADD_CARD_TO_DECK_BEGIN'
export const ADD_CARD_TO_DECK_SUCCESS = 'ADD_CARD_TO_DECK_SUCCESS'
export const ADD_CARD_TO_DECK_SUCCESS_MESSAGE = 'add_card_to_deck_success_message'
export const ADD_CARD_TO_DECK_FAILURE = 'ADD_CARD_TO_DECK_FAILURE'
export const ADD_CARD_TO_DECK_FAILURE_MESSAGE = 'add_card_to_deck_failure_message'
export const ADD_CARD_TO_DECK_UNAUTHORIZED_MESSAGE = 'add_card_to_deck_unauthorized_message'
export const BACKSIDE_QUANTITY_ERROR = 'BACKSIDE_QUANTITY_ERROR'
export const SET_CARD_VALUES = 'SET_CARD_VALUES'
export const SET_FRONT_SIDE = 'SET_FRONT_SIDE'
export const SET_BACK_SIDE = 'SET_BACK_SIDE'
export const CHOOSE_RECENT_TO_LANGUAGE = 'CHOOSE_RECENT_TO_LANGUAGE'
export const CHOOSE_RECENT_FROM_LANGUAGE = 'CHOOSE_RECENT_FROM_LANGUAGE'
export const SET_INFO_VALUES = 'SET_INFO_VALUES'
export const CHANGE_INFO_SWITCHER_STATE = 'CHANGE_INFO_SWITCHER_STATE'
export const CHANGE_CHOOSE_LANGUAGE_STATE = 'CHANGE_CHOOSE_LANGUAGE_STATE'
export const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE'
export const CHANGE_THEME_TYPE_STATE = 'CHANGE_THEME_TYPE_STATE'
export const CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE = 'CHANGE_ADD_BACK_SIDE_SPEED_DIAL_STATE'
export const CHANGE_OPEN_INPUT_IMAGE_STATE = 'CHANGE_OPEN_INPUT_IMAGE_STATE'
export const READ_FILE = 'READ_FILE'
export const READ_FILE_ERROR = 'READ_FILE_ERROR'
export const SET_IMAGE = 'SET_IMAGE'
export const SET_PHOTOS = 'SET_PHOTOS'
export const IMAGES_REQUEST_BEGIN = 'IMAGES_REQUEST_BEGIN'
export const IMAGES_REQUEST_SUCCESS = 'IMAGES_REQUEST_SUCCESS'
export const IMAGES_REQUEST_FAILURE = 'IMAGES_REQUEST_FAILURE'
export const IMAGES_REQUEST_FAILURE_MESSAGE = 'images_request_failure_message'
export const LOAD_NEXT_PAGE_IMAGES_REQUEST_BEGIN = 'LOAD_NEXT_PAGE_IMAGES_REQUEST_BEGIN'
export const LOAD_NEXT_PAGE_IMAGES_REQUEST_SUCCESS = 'LOAD_NEXT_PAGE_IMAGES_REQUEST_SUCCESS'
export const LOAD_NEXT_PAGE_IMAGES_REQUEST_FAILURE = 'LOAD_NEXT_PAGE_IMAGES_REQUEST_FAILURE'
export const CLOSE_IMAGE_SELECTOR_DIALOG = 'CLOSE_IMAGE_SELECTOR_DIALOG'
export const SET_IMAGE_URL = 'SET_IMAGE_URL'
export const CHANGE_CROP = 'CHANGE_CROP'
export const CHANGE_ZOOM = 'CHANGE_ZOOM'
export const CROP_COMPLETED = 'CROP_COMPLETED'
export const IMAGE_CLEAN = 'IMAGE_CLEAN'
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE'
export const INTERNAL_ERROR = 'internal_error'
export const SOMETHING_WENT_WRONG_MESSAGE = 'something_went_wrong_message'
export const INFO_MESSAGE = 'info_message'
export const UNAUTHORIZED_MESSAGE = 'unauthorized'
export const FORBIDDEN_MESSAGE = 'forbidden'
export const WARNING_MESSAGE = 'warning_message'
export const MESSAGE_TYPES = {
  WARNING: 'warning',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
}
export const INFO_PROVIDERS = ['LEO']
export const THEME_TYPES = {
  DARK: { value: 'dark', isDark: true },
  LIGHT: { value: 'light', isDark: false },
}
export const DEFAULT_LOCALISATION_LANGUAGE = 'en'
export const SUPPORTED_LOCALISATION_LANGUAGES = ['en', 'ru']
export const TRANSLATE_LANGUAGES = {
  AUTO: 'automatic',
  AF: 'afrikaans_akk',
  SQ: 'albanian_akk',
  AM: 'amharic_akk',
  AR: 'arabic_akk',
  HY: 'armenian_akk',
  AZ: 'azerbaijani_akk',
  EU: 'basque_akk',
  BE: 'belarusian_akk',
  BN: 'bengali_akk',
  BS: 'bosnian_akk',
  BG: 'bulgarian_akk',
  CA: 'catalan_akk',
  CEB: 'cebuano_akk',
  NY: 'chichewa_akk',
  ZHCN: 'chinese_simplified_akk',
  ZHTW: 'chinese_traditional_akk',
  CO: 'corsican_akk',
  HR: 'croatian_akk',
  CS: 'czech_akk',
  DA: 'danish_akk',
  NL: 'dutch_akk',
  EN: 'english_akk',
  EO: 'esperanto_akk',
  ET: 'estonian_akk',
  TL: 'filipino_akk',
  FI: 'finnish_akk',
  FR: 'french_akk',
  FY: 'frisian_akk',
  GL: 'galician_akk',
  KA: 'georgian_akk',
  DE: 'german_akk',
  EL: 'greek_akk',
  GU: 'gujarati_akk',
  HT: 'haitian_creole_akk',
  HA: 'hausa_akk',
  HAW: 'hawaiian_akk',
  IW: 'hebrew_akk',
  HI: 'hindi_akk',
  HMN: 'hmong_akk',
  HU: 'hungarian_akk',
  IS: 'icelandic_akk',
  IG: 'igbo_akk',
  ID: 'indonesian_akk',
  GA: 'irish_akk',
  IT: 'italian_akk',
  JA: 'japanese_akk',
  JW: 'javanese_akk',
  KN: 'kannada_akk',
  KK: 'kazakh_akk',
  KM: 'khmer_akk',
  KO: 'korean_akk',
  KU: 'kurdish__akk(kurmanji)',
  KY: 'kyrgyz_akk',
  LO: 'lao_akk',
  LA: 'latin_akk',
  LV: 'latvian_akk',
  LT: 'lithuanian_akk',
  LB: 'luxembourgish_akk',
  MK: 'macedonian_akk',
  MG: 'malagasy_akk',
  MS: 'malay_akk',
  ML: 'malayalam_akk',
  MT: 'maltese_akk',
  MI: 'maori_akk',
  MR: 'marathi_akk',
  MN: 'mongolian_akk',
  MY: 'myanmar__akk(burmese)',
  NE: 'nepali_akk',
  NO: 'norwegian_akk',
  PS: 'pashto_akk',
  FA: 'persian_akk',
  PL: 'polish_akk',
  PT: 'portuguese_akk',
  MA: 'punjabi_akk',
  RO: 'romanian_akk',
  RU: 'russian_akk',
  SM: 'samoan_akk',
  GD: 'scots_gaelic_akk',
  SR: 'serbian_akk',
  ST: 'sesotho_akk',
  SN: 'shona_akk',
  SD: 'sindhi_akk',
  SI: 'sinhala_akk',
  SK: 'slovak_akk',
  SL: 'slovenian_akk',
  SO: 'somali_akk',
  ES: 'spanish_akk',
  SU: 'sundanese_akk',
  SW: 'swahili_akk',
  SV: 'swedish_akk',
  TG: 'tajik_akk',
  TA: 'tamil_akk',
  TE: 'telugu_akk',
  TH: 'thai_akk',
  TR: 'turkish_akk',
  UK: 'ukrainian_akk',
  UR: 'urdu_akk',
  UZ: 'uzbek_akk',
  VI: 'vietnamese_akk',
  CY: 'welsh_akk',
  XH: 'xhosa_akk',
  YI: 'yiddish_akk',
  YO: 'yoruba_akk',
  ZU: 'zulu_akk',
}
