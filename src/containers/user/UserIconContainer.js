import React from 'react'
import { connect } from 'react-redux'
import UserIcon from '../../components/user/UserIcon'
import { changeUserFormState } from '../../actions'

const mapStateToProps = () => ({
})

const mapDispatchToProps = ({
  changeUserFormState,
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon)
