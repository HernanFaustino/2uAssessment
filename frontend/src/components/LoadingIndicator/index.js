import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Spin, Col, Row } from 'antd';

import styles from './styles';

function LoadingIndicator(props) {
  const { classes } = props;
  return (
    <Row>
      <Col span={24} className={classes.loading}>
        <Spin size="large"/>
      </Col>
    </Row>
  )
};

LoadingIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(LoadingIndicator);