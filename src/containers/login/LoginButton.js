import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonWithProgress from '../../components/common/ButtonWithProgress'
import { login } from '../../actions/index'

const LoginButton = ({ className, pending, loginClickHandler }) => (
  <ButtonWithProgress
    fullWidth
    className={className}
    loading={pending}
    onClick={loginClickHandler}
    buttonColor="primary"
    progressColor="secondary"
  >
    login_btn
  </ButtonWithProgress >
)

LoginButton.propTypes = {
  loginClickHandler: PropTypes.func.isRequired,
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
  loginClickHandler: login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginButton)
