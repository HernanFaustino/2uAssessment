import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Alert } from "antd";

import styles from './styles';

function ErrorAlert(props) {
  const { classes, message } = props;
  return (
    <Alert
      className={classes.errorAlert}
      message={message}
      type="error"
      showIcon
      closable
    />
  );
}

ErrorAlert.propTypes = {
  classes: PropTypes.shape().isRequired,
  message: PropTypes.node.isRequired,
};

export default injectSheet(styles)(ErrorAlert);
