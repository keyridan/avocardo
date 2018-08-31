import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../../components/common/SimpleButton'
import { changeLoginFormState } from '../../actions/index'

const AppBarLoginButton = ({ className, changeLoginFormStateFunc }) => (
  <div className={className}>
    <SimpleButton
      onClick={event => changeLoginFormStateFunc(event.currentTarget)}
      color="primary"
    >
      login_to_tiny_cards_btn
    </SimpleButton >
  </div >
)

AppBarLoginButton.propTypes = {
  changeLoginFormStateFunc: PropTypes.func.isRequired,
  className: PropTypes.string,
}

AppBarLoginButton.defaultProps = {
  className: '',
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
  changeLoginFormStateFunc: changeLoginFormState,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarLoginButton)
