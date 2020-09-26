import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon  } from 'antd';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './styles';

const { SubMenu } = Menu;
const { Sider } = Layout;

function Sidebar(props) {

  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="laptop" />
              Invoices
            </span>
          }
        >
          <Menu.Item key="2">
            <NavLink to="/" className="nav-text">
              Pending Invoices
            </NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="user" />
              Session
            </span>
          }
        >
          <Menu.Item key="4">
            <NavLink to="/logout" className="nav-text">
              Logout
            </NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default injectSheet(styles)(Sidebar);