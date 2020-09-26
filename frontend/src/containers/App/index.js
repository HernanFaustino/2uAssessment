import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon  } from 'antd';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import NotFoundPage from '../NotFoundPage/Loadable';
import InvoicePage from '../InvoicePage/Loadable';

import styles from './styles';

const { Content } = Layout;

function App(props) {
  const { classes } = props;

  return (
    <Layout>
      <Helmet titleTemplate="Invoice APP"  defaultTitle="Invoice APP">
        <meta name="description" content="Invoice APP" />
      </Helmet>
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content className={classes.container}>
            <Switch>
              <Route exact path="/" component={InvoicePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default injectSheet(styles)(App);
