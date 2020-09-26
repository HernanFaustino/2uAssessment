import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Layout } from 'antd';
import Img from 'react-image';
import { mainLogo } from '../../images';

import styles from './styles';

const { Header } = Layout;

function MainHeader (props) {
  const { classes } = props;

  return (
    <Header className={classes.header}>
      <Img
        src={mainLogo}
        className={classes.logo}
      />
      <div className={classes.headerContent}>
      </div>
    </Header>
  );
}

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(MainHeader);
