import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography } from "antd";
import injectSheet from 'react-jss';

import styles from './styles';

const { Footer } = Layout;
const { Text } = Typography;

function MainFooter(props) {
  const { classes } = props;
  return (
    <Footer className={classes.footer}>
      <div className={classes.footerContent}>
        <Text className={classes.footerText}>
          Todos los derechos reservados © {new Date().getFullYear()}
        </Text>
      </div>
    </Footer>
  );
}

MainFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(MainFooter);
