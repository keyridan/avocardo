import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonWithProgress from '../../components/common/ButtonWithProgress'
import { login } from '../../actions/index'

const LoginButton = ({ className, pending, login }) => (
  <ButtonWithProgress
    fullWidth
    className={className}
    loading={pending}
    onClick={login}
    buttonColor="primary"
    progressColor="secondary"
  >
    login_btn
  </ButtonWithProgress >
)

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

LoginButton.defaultProps = {
  className: '',
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
