import { connect } from 'react-redux'
import CheckBoxItem from '../components/common/CheckBoxItem'
import { toggleOption } from '../actions'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  onClick: (index) => {
    dispatch(toggleOption(index))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxItem)
