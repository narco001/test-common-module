import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Head from './Head';
import './index.less';

const { SubMenu } = Menu;

const Index = props => (
  <div className="ant-layout-aside">
    <aside className="ant-layout-sider">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <SubMenu key="sub1" title={<span>公用组件</span>}>
          <Menu.Item key="1">
            <Link to="/example">样例</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </aside>
    <div className="ant-layout-main">
      <Head name="测试" />
      <div className="ant-layout-container">
        <div className="ant-layout-content">{props.children}</div>
      </div>
    </div>
  </div>
);

Index.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Index;
