import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import classNames from 'classnames'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import TranslatedTextContainer from '../containers/TranslatedTextContainer'

const styles = theme => ({
  success: {
    backgroundColor: green[700],
  },
  error: {
    backgroundColor: theme.palette ? theme.palette.error.dark : 'currentColor',
  },
  info: {
    backgroundColor: blue[700],
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing ? theme.spacing.unit : 0,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

const MessageSnackBar = ({
  classes, text, translatedText, type, open, closeMessage,
}) => {
  const Icon = variantIcon[type]
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={closeMessage}
    >
      <SnackbarContent
        className={classes[type]}
        aria-describedby="client-snackbar"
        message={
          (
            <span id="client-snackbar" className={classes.message} >
              {Icon && (
                <Icon className={classNames(classes.icon, classes.iconVariant)} />
              )}
              {translatedText && (<TranslatedTextContainer value={translatedText} />)}
              {translatedText && text && (<br />)}
              {text}
            </span >
          )
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={closeMessage}
          >
            <CloseIcon className={classes.icon} />
          </IconButton >,
        ]}
      />
    </Snackbar >
  )
}

MessageSnackBar.propTypes = {
  classes: PropTypes.objectOf(styles).isRequired,
  text: PropTypes.string.isRequired,
  translatedText: PropTypes.string.isRequired,
  type: PropTypes.string,
  open: PropTypes.bool.isRequired,
  closeMessage: PropTypes.func.isRequired,
}

MessageSnackBar.defaultProps = {
  type: '',
}

export default withStyles(styles)(MessageSnackBar)
