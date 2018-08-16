import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../components/SimpleButton'
import Progress from '../components/Progress'
import { login } from '../actions'

const LoginButton = ({ className, pending, login }) => (
  <div className={`${className}_container`} >
    <SimpleButton
      className={className}
      onClick={login}
      active={pending}
      color="primary"
    >
      {pending ? '' : 'login_btn'}
    </SimpleButton >
    <Progress loading={pending} className={`${className}_progress`} />
  </div >
)

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
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
