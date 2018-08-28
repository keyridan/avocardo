import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

function styled(WrappedComponent, customProps) {
  return (style, options) => {
    class StyledComponent extends Component {
      render() {
        let {
          forwardRef,
          classes,
          className,
          ...passThroughProps
        } = this.props;
        return (
          <WrappedComponent
            ref={forwardRef}
            className={classNames(classes.root, className)}
            {...passThroughProps}
            {...customProps}
          />
        );
      }
    }

    StyledComponent.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
    };

    let hoistedProps = {};

    const styles =
      typeof style === 'function'
        ? theme => {
          return { root: style({ ...theme, theme, props: hoistedProps }) };
        }
        : { root: style };

    const WithRef = withStyles(styles, options)(StyledComponent);

    return React.forwardRef((props, ref) => {
      hoistedProps = props;
      return <WithRef {...props} forwardRef={ref} />;
    });
  };
}

export default styled;
