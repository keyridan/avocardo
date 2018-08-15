import React from 'react'
import FromLanguageButtonBarContainer from '../containers/FromLanguageButtonBarContainer'
import LanguageFromSelectorContainer from '../containers/LanguageFromSelectorContainer'
import TranslationResultContainer from '../containers/TranslationResultContainer'
import ToLanguageButtonBarContainer from '../containers/ToLanguageButtonBarContainer'
import LanguageToSelectorContainer from '../containers/LanguageToSelectorContainer'
import WordInput from '../containers/WordInput'
import TranslateButton from '../containers/TranslateButton'
import CardsAppBar from '../containers/CardsAppBar'
import InfoCardsContainer from '../containers/InfoCardsContainer'
import Card from './Card'
import s from './TranslationPage.css'

const TranslationPage = () => (
  <div>
    <CardsAppBar />
    <div className={s.cards_content}>
      <LanguageFromSelectorContainer className={s.from_translation_language_selector} />
      <FromLanguageButtonBarContainer className={s.from_language_bar} />
      <WordInput className={s.word_input_container} />
      <InfoCardsContainer className={s.infocards} />
      <TranslateButton className={s.btn_translate} />

      <LanguageToSelectorContainer className={s.to_translation_language_selector} />
      <ToLanguageButtonBarContainer className={s.to_language_bar} />
      <TranslationResultContainer className={s.translation_result} />

      <Card className={s.flash_card_content} />
    </div>
  </div>
)

export default TranslationPage
