import React from 'react'
import PropTypes from 'prop-types'
import FromLanguageButtonBarContainer from '../containers/FromLanguageButtonBarContainer'
import LanguageFromSelectorContainer from '../containers/LanguageFromSelectorContainer'
import TranslationResultContainer from '../containers/TranslationResultContainer'
import ToLanguageButtonBarContainer from '../containers/ToLanguageButtonBarContainer'
import LanguageToSelectorContainer from '../containers/LanguageToSelectorContainer'
import WordInput from '../containers/WordInput'
import TranslateButton from '../containers/TranslateButton'
import ReverseButton from '../containers/ReverseButton'
import CardsAppBar from '../containers/CardsAppBar'
import InfoCardsContainer from '../containers/InfoCardsContainer'
import Card from '../components/Card'
import s from './TranslationPage.css'

const TranslationItem = () => (
  <div >
    <CardsAppBar />
    <div className={s.cards_content} >
      <LanguageFromSelectorContainer className={s.from_translation_language_selector} />
      <FromLanguageButtonBarContainer className={s.from_language_bar} />
      <WordInput className={s.word_input_container} />
      <InfoCardsContainer className={s.infocards} />
      <TranslateButton className={s.btn_translate} />

      <ReverseButton className={s.reverse_button_container} />

      <LanguageToSelectorContainer className={s.to_translation_language_selector} />
      <ToLanguageButtonBarContainer className={s.to_language_bar} />
      <TranslationResultContainer className={s.translation_result} />

      <Card className={s.flash_card_content} />
    </div >
  </div >
)

TranslationItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default TranslationItem
