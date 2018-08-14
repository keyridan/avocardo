import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import TranslationPage from '../components/TranslationPage'
import {
  chooseFromLanguageAndAddToRecent,
  chooseToLanguageAndAddToRecent,
  setWord,
  translateAndSetValues,
} from '../actions'

const TranslatePage = ({ params, chooseFromLanguageAndAddToRecent, chooseToLanguageAndAddToRecent, setWord, translateAndSetValues }) => {
  const { fromLanguage, toLanguage, word } = params
  chooseFromLanguageAndAddToRecent(fromLanguage.toUpperCase())
  chooseToLanguageAndAddToRecent(toLanguage.toUpperCase())
  setWord(word)
  translateAndSetValues()
  return (
    <TranslationPage />
  )
}

TranslatePage.propTypes = {
  params: PropTypes.shape({
    fromLanguage: PropTypes.string,
    toLanguage: PropTypes.string,
    word: PropTypes.string,
  }).isRequired,
  chooseFromLanguageAndAddToRecent: PropTypes.func.isRequired,
  chooseToLanguageAndAddToRecent: PropTypes.func.isRequired,
  setWord: PropTypes.func.isRequired,
  translateAndSetValues: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  params: ownProps.match.params,
})

const mapDispatchToProps = {
  chooseFromLanguageAndAddToRecent,
  chooseToLanguageAndAddToRecent,
  setWord,
  translateAndSetValues,
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslatePage))
