import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SimpleButton from '../../components/common/SimpleButton'
import { changeLoginFormState } from '../../actions/index'

const AppBarLoginButton = ({ className, changeLoginFormState }) => (
  <div className={className}>
    <SimpleButton
      onClick={event => changeLoginFormState(event.currentTarget)}
      color="primary"
    >
      login_to_tiny_cards_btn
    </SimpleButton >
  </div >
)

AppBarLoginButton.propTypes = {
  changeLoginFormState: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
  changeLoginFormState,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarLoginButton)
