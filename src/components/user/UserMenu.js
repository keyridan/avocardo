import Paper from '@material-ui/core/Paper/Paper'
import Popover from '@material-ui/core/Popover/Popover'
import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import SimpleButton from '../../components/common/SimpleButton'
import TranslatedTextContainer from '../../containers/TranslatedTextContainer'

const styles = () => ({
  paper: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logout: {
    marginTop: '20px',
  },
  userName: {
    color: 'grey',
    fontSize: '90%',
  },
})

const UserMenu = ({
  user, userFormState, changeUserFormState, classes, logout,
}) => (
  <Popover
    anchorEl={userFormState.anchorEl}
    open={userFormState.open}
    onClose={() => changeUserFormState()}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
  >
    <Paper className={classes.paper}>
      <span><TranslatedTextContainer value="logged_in_as" /> <span className={classes.userName}>{user}</span>
      </span>
      <SimpleButton
        className={classes.logout}
        color="primary"
        onClick={logout}
      >
        <TranslatedTextContainer value="logout" />
      </SimpleButton>
    </Paper>
  </Popover>
)

UserMenu.propTypes = {
  user: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(styles).isRequired,
  userFormState: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.any,
  }).isRequired,
  changeUserFormState: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default withStyles(styles)(UserMenu)
