import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import { login } from '../actions'

const LoginButton = ({ className, pending, login }) => (
  <SimpleButton
    className="reverse_button"
    onClick={login}
    color="primary"
  >
    {pending ? 'pending_login_btn' : 'login_btn'}
  </SimpleButton >
)

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  pending: state.tinyCardsLogin.pending,
})

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginButton)
