import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FromLanguageButtonBarContainer from './FromLanguageButtonBarContainer'
import LanguageFromSelectorContainer from './LanguageFromSelectorContainer'
import TranslationResultContainer from './TranslationResultContainer'
import ToLanguageButtonBarContainer from './ToLanguageButtonBarContainer'
import LanguageToSelectorContainer from './LanguageToSelectorContainer'
import WordInput from './WordInput'
import TranslateButton from './TranslateButton'
import ReverseButton from './ReverseButton'
import CardsAppBar from './CardsAppBar'
import InfoCardsContainer from './InfoCardsContainer'
import Card from '../components/Card'
import s from './TranslatePage.css'

export class TranslatePage extends Component {
  render() {
    console.log('p:', this.props)
    return (
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
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

const mapDispatchToProps = {}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslatePage))
