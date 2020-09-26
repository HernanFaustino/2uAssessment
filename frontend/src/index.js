/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'react-jss';
import esES from 'antd/es/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es';

import './styles/index.less';
import AppStoreProvider from './contexts';
import App from './containers/App';
import theme from './themes/mainTheme';

const MOUNT_NODE = document.getElementById('root');

moment.locale('es');

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={esES}>
      <ThemeProvider theme={theme}>
        <AppStoreProvider>
          <App />
        </AppStoreProvider>
      </ThemeProvider>
    </ConfigProvider>
  </HashRouter>,
  MOUNT_NODE
);
